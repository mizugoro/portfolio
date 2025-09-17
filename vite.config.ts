import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    // 出力先を 'docs' に変更
    // デフォルトは 'dist'
    outDir: 'docs',
  },
})
