import path from 'node:path';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteImagePlugin } from './config/vite-imagetools';

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths(), viteImagePlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  // base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  },
});
