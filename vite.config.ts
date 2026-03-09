import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: { port: 5173, open: false },
  build: {
    chunkSizeWarningLimit: 1500, // সীমা আরেকটু বাড়িয়ে দিলাম
    sourcemap: false,
    cssCodeSplit: true,
    minify: "esbuild", 
    rollupOptions: {
      output: {
        // সিরিয়াল ঠিক রাখতে এবং এরর কমাতে সহজ ম্যানুয়াল চাস্কিং
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // ১. খুব বড় লাইব্রেরিগুলো আলাদা করুন (পিডিএফ এবং অন্যান্য)
            if (id.includes("html2pdf.js") || id.includes("jspdf") || id.includes("html2canvas")) {
              return "pdf-engine";
            }
            if (id.includes("framer-motion") || id.includes("lucide-react")) {
              return "ui-libs";
            }
            // ২. রিঅ্যাক্ট এবং কোর লাইব্রেরিগুলোকে একটি কমন ভেন্ডরে রাখুন
            // এদের আলাদা আলাদা চাস্কে ভাগ করলে অনেক সময় একে অপরকে খুঁজে পায় না
            return "vendor";
          }
        },
        assetFileNames: "assets/[name].[hash].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
  // এন্টারপ্রাইজ লেভেল অপটিমাইজেশন
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "react-helmet-async", "framer-motion"],
  },
});