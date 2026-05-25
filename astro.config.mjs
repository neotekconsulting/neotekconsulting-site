import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://neotekconsulting.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
