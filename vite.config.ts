import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@icons": path.resolve(__dirname, "src/shared/assets/icons"),
      "@shared": path.resolve(__dirname, "src/shared"),
    },
  },
  server: {
    port: 3000,
  },
});
