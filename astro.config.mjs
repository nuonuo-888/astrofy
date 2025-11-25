import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import edgeoneAdapter from "@edgeone/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.edgeone.app',
  edgeoneAdapter: edgeoneAdapter(),
  integrations: [mdx(), sitemap(), tailwind()]
});