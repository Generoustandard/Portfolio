import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'Portfolio'
const isUserPage = repositoryName.toLowerCase() === 'generoustandard.github.io'

// https://vite.dev/config/
export default defineConfig({
  base: isUserPage ? '/' : `/${repositoryName}/`,
  plugins: [react(), tailwindcss()],
})
