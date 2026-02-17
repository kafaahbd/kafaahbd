import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "/kafaahbd/",

	// ===== সার্ভার অপশন (ডেভেলপমেন্ট) =====
	server: {
		port: 5173,
		open: false, // npm run dev দিলে স্বয়ংক্রিয়ভাবে ব্রাউজার খুলবে
	},

	// ===== বিল্ড অপশন (প্রোডাকশন) =====
	build: {
		// ১. ওয়ার্নিং লিমিট বাড়ানো (৫০০ kB থেকে ১০০০ kB)
		chunkSizeWarningLimit: 1000,

		// ২. সোর্সম্যাপ তৈরি করা (ডিবাগিংয়ের জন্য, প্রোডাকশনে false দেয়া ভালো)
		sourcemap: false,

		// ৩. CSS কোড স্প্লিটিং
		cssCodeSplit: true,

		// ৪. Rollup অপশন
		rollupOptions: {
			output: {
				// অ্যাসেট ফাইল নামের ফরম্যাট (আপনার দেওয়া)
				assetFileNames: "assets/[name].[hash].[ext]",

				// ===== manualChunks: বড় লাইব্রেরি আলাদা করা =====
				manualChunks: {
					// React ইকোসিস্টেম আলাদা
					"react-vendor": ["react", "react-dom", "react-router-dom"],

					// PDF জেনারেশন লাইব্রেরি আলাদা
					"pdf-generator": ["html2pdf.js"],

					// হেলমেট ও অন্যান্য ইউটিলিটি
					utils: ["react-helmet-async"],

					// বাকি সব node_modules একসাথে
					vendor: ["node_modules"],
				},

				// ===== চাঙ্ক ফাইল নামের ফরম্যাট =====
				chunkFileNames: "assets/[name].[hash].js",
				entryFileNames: "assets/[name].[hash].js",
			},
		},

		// ৫. Terser অপশন (minify কাস্টমাইজ)
		minify: "terser",
		terserOptions: {
			compress: {
				drop_console: true, // কনসোল লগ বাদ দেওয়া
				drop_debugger: true,
			},
		},
	},

	// ===== ডিপেন্ডেন্সি অপটিমাইজেশন (ডেভেলপমেন্ট) =====
	optimizeDeps: {
		include: ["react", "react-dom", "react-router-dom", "react-helmet-async"],
	},
});
