// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/work/uber/",
  build: {
    outDir: "public",
    emptyOutDir: true,
  },
});
