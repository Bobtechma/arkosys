import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin to inline CSS directly into index.html to eliminate 100% of render-blocking CSS requests
function inlineCss() {
  return {
    name: 'inline-css-plugin',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml(html, { bundle }) {
      if (!bundle) return html;
      let inlinedHtml = html;
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (fileName.endsWith('.css') && chunk.type === 'asset') {
          const css = chunk.source;
          const linkRegex = new RegExp(`<link[^>]*href="[^"]*${fileName}"[^>]*>`, 'g');
          inlinedHtml = inlinedHtml.replace(linkRegex, `<style>${css}</style>`);
        }
      }
      return inlinedHtml;
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), inlineCss()],
})
