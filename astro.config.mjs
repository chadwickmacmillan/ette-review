import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "static",
	outDir: "./public_html",
	site: "https://ettereview.com",
	base: "/admin/winter2024",
	trailingSlash: "always",
});
