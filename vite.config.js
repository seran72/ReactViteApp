import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ReactViteApp/",

  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
   // you can replace this port with any port
  }
  })

