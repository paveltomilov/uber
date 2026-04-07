// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/uber/", // если сайт в корне
  build: {
    outDir: "dist",
  },
});
