import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "/kafaahbd/",

	// ===== সার্ভার অপশন =====
	server: {
		port: 5173,
		open: false,
	},

	// ===== বিল্ড অপশন =====
	build: {
		// ওয়ার্নিং লিমিট বাড়ানো
		chunkSizeWarningLimit: 1000,

		// সোর্সম্যাপ বন্ধ (প্রোডাকশনের জন্য)
		sourcemap: false,

		// CSS আলাদা ফাইল
		cssCodeSplit: true,

		rollupOptions: {
			output: {
				// আপনার দেওয়া asset ফাইল নামের ফরম্যাট
				assetFileNames: "assets/[name].[hash].[ext]",

				// ✅ সঠিক manualChunks কনফিগারেশন (ফাংশন আকারে)
				manualChunks: (id) => {
					// node_modules থেকে আসা যেকোনো ইমপোর্ট আলাদা চাঙ্কে রাখবো
					if (id.includes("node_modules")) {
						// React related libraries
						if (
							id.includes("react") ||
							id.includes("react-dom") ||
							id.includes("react-router-dom")
						) {
							return "react-vendor";
						}
						// PDF related libraries
						if (id.includes("html2pdf.js")) {
							return "pdf-generator";
						}
						// Helmet related
						if (id.includes("react-helmet-async")) {
							return "utils";
						}
						// বাকি সব node_modules
						return "vendor";
					}
				},

				// অন্যান্য ফাইল নামের ফরম্যাট
				chunkFileNames: "assets/[name].[hash].js",
				entryFileNames: "assets/[name].[hash].js",
			},
		},

		// Minify কনফিগারেশন
		minify: "terser",
		terserOptions: {
			compress: {
				drop_console: true, // console.log বাদ দেওয়া
				drop_debugger: true,
			},
		},
	},

	// ===== ডিপেন্ডেন্সি অপটিমাইজেশন =====
	optimizeDeps: {
		include: ["react", "react-dom", "react-router-dom", "react-helmet-async"],
	},
});
