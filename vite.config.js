import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'f1-phantom-cars' with your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/ghostcar/',
})
