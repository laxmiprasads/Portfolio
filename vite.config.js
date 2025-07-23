// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist" // Or whatever your build output directory is
  },
  server: {
    historyApiFallback: true // This helps with local development routing
  }
});