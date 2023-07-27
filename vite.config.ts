// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import * as path from 'path';

config();
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3004,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  define: {
    __VALUE__: process.env.VALUE,
  },
});
