import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@hyperion/app': path.resolve(__dirname, './src/app'),
      '@hyperion/config': path.resolve(__dirname, './src/config'),
      '@hyperion/models': path.resolve(__dirname, './src/models'),
    }
  }
})
