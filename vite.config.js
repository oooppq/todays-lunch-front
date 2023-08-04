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
  // 빌드 결과물의 이름을 지정, 그렇지 않으면 index-[hash].js 와 같은 형태로 빌드됨
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
