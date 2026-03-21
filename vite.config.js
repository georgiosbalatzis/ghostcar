import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For username.github.io root repo use '/'
  // For project repos (github.com/user/repo) use '/repo-name/'
  base: '/',
})
