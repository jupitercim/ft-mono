import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    nodePolyfills({
      globals: {
        global: true,
        Buffer: true,
        process: true,
      },
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      https: 'https-browserify',
    },
  },
  define: {
    https: require('https-browserify'),
  },
  optimizeDeps: {
    include: ['react-dom/client'],
  },
  build: {
    outDir: 'build',
    minify: 'terser', // +20s building time
    // sourcemap: true,
    commonjsOptions: { transformMixedEsModules: true },
  },
});
