// vite.config.ts
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { tanStackRouterVite } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
var vite_config_default = defineConfig({
  plugins: [
    tsconfigPaths(),
    tanStackRouterVite(),
    tanstackStart({
      server: {
        preset: "vercel"
      }
    })
  ]
});
export {
  vite_config_default as default
};
