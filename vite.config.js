import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
<<<<<<< HEAD
      '/api': 'http://localhost:3000',
=======
      '/api': 'https://hammond-fertiliser-tracker-21b964005429.herokuapp.com/',
>>>>>>> fa6a8bcf2f67d2db36a841d06b81c5c9a55dbe77
    },
  },
})
