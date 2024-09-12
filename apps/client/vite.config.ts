import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // dodajemy to \/
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // local nestjs api
        changeOrigin: true,
      },
    },
  },
});
