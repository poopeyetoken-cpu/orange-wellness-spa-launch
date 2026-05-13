import { createServer } from "vite";

const server = await createServer({
  configFile: "vite.config.ts",
  root: process.cwd(),
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
});

await server.listen();
server.printUrls();

process.on("SIGINT", async () => {
  await server.close();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await server.close();
  process.exit(0);
});

// Keep the process alive while Vite serves the app.
setInterval(() => {}, 1 << 30);
