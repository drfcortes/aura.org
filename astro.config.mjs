import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://aurablock.org',        // 🔥 Muy importante
  base: '/',                            // 🔥 si estás usando dominio raíz (no /subcarpeta/)
});
