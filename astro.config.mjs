import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://neotekconsulting.com',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
