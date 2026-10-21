import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function spaRoutesPlugin() {
  return {
    name: 'spa-routes-fallback',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist')
      const indexHtmlPath = path.join(distDir, 'index.html')

      if (!fs.existsSync(indexHtmlPath)) return

      const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8')

      // Routes that should exist as physical directories for static/cPanel servers
      const routes = [
        'about',
        'about-us',
        'cordyceps',
        'cordyceps-militaris',
        'cordyceps-cultivation-training',
        'training',
        'cordyceps-training'
      ]

      routes.forEach((route) => {
        const routeDir = path.join(distDir, route)
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true })
        }
        fs.writeFileSync(path.join(routeDir, 'index.html'), htmlContent)
      })

      // Also create 404.html fallback
      fs.writeFileSync(path.join(distDir, '404.html'), htmlContent)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaRoutesPlugin()],
})
