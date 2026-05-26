// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/work/uber/", // ← поменяли с "./" на конкретный путь
  build: {
    outDir: "public",
    emptyOutDir: true,
  },
});
