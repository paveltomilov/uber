import { defineConfig } from "vite";

export default defineConfig({
  base: "/uber/", // важно! Например '/uber-landing/'
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
