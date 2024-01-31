import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteFontsPlugin from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFontsPlugin({
      google: {
        families: [
          {
            name: 'Familjen Grotesk',
            styles: 'ital,wght@0,400;0,700;1,400;1,700',
          },
        ],
      },
    }),
  ],
});