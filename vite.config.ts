import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react(), tsconfigPaths()],
  /* If proxy is needed
  server: {
    proxy: {
      "/api": "localhost:8080"
    }
  },
  */
  server: {
    port: 3100,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
});
