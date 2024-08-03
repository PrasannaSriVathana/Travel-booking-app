import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  esbuild: {
    loader: 'jsx',
    include: [
      /node_modules\/.*\.js$/,  // Include JSX in node_modules
      /\.jsx?$/,                // Include JSX in your source files
    ],
    exclude: [],
  },
});