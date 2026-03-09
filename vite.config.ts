import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: { port: 5173, open: false },
  
  // কনসোল লগ রিমুভ করার জন্য এই অংশটি যোগ করুন
  esbuild: {
    drop: ["console", "debugger"],
  },

  build: {
    chunkSizeWarningLimit: 1500,
    sourcemap: false,
    cssCodeSplit: true,
    minify: "esbuild", 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("html2pdf.js") || id.includes("jspdf") || id.includes("html2canvas")) {
              return "pdf-engine";
            }
            if (id.includes("framer-motion") || id.includes("lucide-react")) {
              return "ui-libs";
            }
            return "vendor";
          }
        },
        assetFileNames: "assets/[name].[hash].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "react-helmet-async", "framer-motion"],
  },
});