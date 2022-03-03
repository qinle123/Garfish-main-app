import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'ccc-portal-test03.biz.sheincorp.cn',
    port: 3003,
    https: true,
  },
  plugins: [react()]
})
