import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

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

// Serve static files (React app)
router.get("/", async (ctx) => {
  await send(ctx, "index.html", { root: "./public" });
});

// API endpoint to fetch message from Rust backend
router.get("/api/message", async (ctx) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

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

// Serve the server
const port = 8081;
console.log(`Server running at http://localhost:${port}`);
await app.listen({ port });
