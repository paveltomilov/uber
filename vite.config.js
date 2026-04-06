import { defineConfig } from "vite";

export default defineConfig({
  base: "/uber/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
