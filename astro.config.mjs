import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://find1dream.github.io',
  build: { inlineStylesheets: 'always' },
  // The dev server runs in a container on a bind mount, where file events don't arrive; poll instead.
  vite: { server: { watch: { usePolling: true, interval: 300 } } },
});
