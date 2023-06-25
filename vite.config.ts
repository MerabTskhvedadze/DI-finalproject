import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      views: path.resolve(__dirname, 'src/views'),
      context: path.resolve(__dirname, 'src/context'),
      providers: path.resolve(__dirname, 'src/providers'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      utils: path.resolve(__dirname, 'src/utils'),
      types: path.resolve(__dirname, 'src/types'),
      routes: path.resolve(__dirname, 'src/routes'),
      admin: path.resolve(__dirname, 'src/admin'),
    },
  },
  plugins: [react()],
});
