import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

// Error handling middleware
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error("Error:", err);
    ctx.response.status = 500;
    ctx.response.body = "Internal server error";
  }
});

// Serve index.html
router.get("/", async (ctx) => {
  await send(ctx, "src/index.html");
});

// Serve TypeScript/JavaScript files
router.get("/(.*)\\.ts", async (ctx) => {
  const path = ctx.params[0] + ".ts";
  ctx.response.headers.set("Content-Type", "application/javascript");
  await send(ctx, `src/${path}`);
});

router.get("/(.*)\\.tsx", async (ctx) => {
  const path = ctx.params[0] + ".tsx";
  ctx.response.headers.set("Content-Type", "application/javascript");
  await send(ctx, `src/${path}`);
});

// API endpoint
router.get("/api/message", async (ctx) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch("http://127.0.0.1:8080", {
      signal: controller.signal,
    }).finally(() => clearTimeout(timeoutId));

    const message = await response.text();
    ctx.response.body = { message };
  } catch (err) {
    if (err.name === "AbortError") {
      ctx.response.status = 504;
      ctx.response.body = { error: "Backend server timeout" };
    } else {
      throw err;
    }
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = 8081;
console.log(`Server running at http://localhost:${port}`);
await app.listen({ port });