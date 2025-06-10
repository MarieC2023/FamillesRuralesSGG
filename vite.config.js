import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from "vite-plugin-pages"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: "src/pages"
    })
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src")
      },
      {
        find: "@layout",
        replacement: path.resolve(__dirname, "src/components/layout")
      },
      {
        find: "@partials",
        replacement: path.resolve(__dirname, "src/components/partials")
      }
    ]
  },
});
