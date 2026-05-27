import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://neotekconsulting.com',
  base: '/neotekconsulting-site/',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
