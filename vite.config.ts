import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'layouts', replacement: path.resolve(__dirname, 'src/layouts') },
      { find: 'views', replacement: path.resolve(__dirname, 'src/views') },
    ],
  },
  plugins: [react()],
});
