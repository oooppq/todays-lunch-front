import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteSvgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), viteSvgr()],
  publicDir: false,
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
