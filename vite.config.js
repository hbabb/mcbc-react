import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all')],
  css: {
    postcss: {
      plugins: [
        postcssImport,
        postcssNested,
        autoprefixer,
        tailwindcss('./tailwind.config.js'),
      ],
      postcssrc: './postcss.config.js',
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: '0.0.0.0', // This is crucial
    hmr: {
      host: 'localhost',
      port: 8080,
    },
    watch: {
      usePolling: true,
    },
  },
})
