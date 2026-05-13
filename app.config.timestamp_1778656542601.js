// app.config.ts
import { defineConfig } from "vinxi/config";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
var app_config_default = defineConfig({
  routers: {
    client: {
      type: "client",
      handler: "./src/start.ts",
      target: "browser",
      plugins: () => [tsconfigPaths(), tanstackStart()]
    },
    server: {
      type: "http",
      handler: "./src/start.ts",
      target: "server",
      plugins: () => [tsconfigPaths(), tanstackStart()]
    }
  },
  server: {
    preset: "vercel"
  }
});
export {
  app_config_default as default
};
