import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { hash } from './src/utils/functions.js'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/linktree/",
  plugins: [
    vue()
  ],
  server: {
    host: "0.0.0.0",
    port: 8000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + hash + `.js`,
        chunkFileNames: `[name]` + hash + `.js`,
        assetFileNames: `[name]` + hash + `.[ext]`
      }
    }
  }
})