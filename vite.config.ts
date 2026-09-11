import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/opd-flow/',
  server: {
    host: '127.0.0.1',
    port: 5173,
    watch: {
      ignored: [
        '**/dist - Copy/**',
        '**/node_modules - Copy/**',
        '**/.github - Copy/**',
        '**/dist/**',
      ],
    },
  },
})
