import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@Hooks': path.resolve(__dirname, 'src/Hooks'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
