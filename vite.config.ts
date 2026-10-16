import { defineConfig, type ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { themeInitScript } from '@cqu-moe/theme';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'static-homepage',
      configureServer(server: ViteDevServer) {
        server.watcher.on('change', (file) => {
          if (file.endsWith('.tsx') || file.endsWith('/services.ts')) {
            server.ws.send({ type: 'full-reload' });
          }
        });
      },
      transformIndexHtml: {
        order: 'pre',
        async handler(html, context) {
          if (!context.server) return html;
          const { renderPage } = await context.server.ssrLoadModule('/src/render.tsx');
          return html.replace('<!--page-html-->', () => renderPage());
        },
      },
    },
    {
      name: 'theme-init',
      transformIndexHtml: () => [
        { tag: 'script', children: themeInitScript, injectTo: 'head-prepend' },
      ],
    },
  ],
  server: { host: '127.0.0.1', port: 5174, strictPort: true },
});
