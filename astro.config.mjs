import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import edgeoneAdapter from "@edgeone/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy.edgeone.app',
  // output: 'static',
  adapter: edgeoneAdapter(),
  integrations: [mdx(), sitemap(), tailwind()]
});