import { Application, Router } from "https://deno.land/x/oak/mod.ts";
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

router.get("/", async (ctx) => {
  try {
    // Fetch message from Rust backend with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout
    
    const response = await fetch("http://127.0.0.1:8080", {
      signal: controller.signal
    }).finally(() => clearTimeout(timeoutId));
    
    const message = await response.text();

    // Create the HTML document
    const doc = new DOMParser().parseFromString(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Rust + Deno App</title>
          <style>
            body { 
              font-family: system-ui, sans-serif;
              display: grid;
              place-items: center;
              min-height: 100vh;
              margin: 0;
            }
          </style>
        </head>
        <body>
          <h1 id="message"></h1>
        </body>
      </html>
    `, 'text/html');

    if (!doc) {
      throw new Error("Failed to create HTML document");
    }

    const messageElement = doc.getElementById("message");
    if (!messageElement) {
      throw new Error("Message element not found");
    }

    messageElement.innerText = message;
    
    ctx.response.type = "html";
    ctx.response.body = doc.documentElement.outerHTML;
    
  } catch (err) {
    if (err.name === 'AbortError') {
      ctx.response.status = 504;
      ctx.response.body = "Backend server timeout";
    } else {
      throw err; // Let the error middleware handle it
    }
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = 8081;
console.log(`Server running at http://localhost:${port}`);

await app.listen({ port });
