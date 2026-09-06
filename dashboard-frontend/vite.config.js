import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ← This is required for @theme to work
  ],
  server: {
    port: 5173,
    open: true,
  },
});
