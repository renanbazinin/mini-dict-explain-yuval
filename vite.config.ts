import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Production `base` must match the GitHub repo name for project Pages (see README). */
const repoBase = '/mini-dict-explain-yuval/'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : repoBase,
}))
