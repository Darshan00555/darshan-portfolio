import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/', // Ensure base path is set correctly
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined, // Disable manual chunking to prevent 404s
      },
    },
    // Ensure assets are inlined or properly referenced
    assetsInlineLimit: 4096,
  },
});
