import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	output: "static",
	outDir: "./public_html",
	site: "https://ettereview.com",
	base: "/",
	trailingSlash: "always",
	integrations: [robotsTxt()],
});

