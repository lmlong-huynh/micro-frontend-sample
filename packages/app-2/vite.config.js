import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'menus',
      filename: 'remoteEntry.js',
      exposes: {
        './entry': './src/entry.js',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 5012,
  },
});
