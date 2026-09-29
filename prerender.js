import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerender() {
  console.log('--- Starting SSG Prerendering ---');
  const distIndexPath = path.resolve(__dirname, 'dist', 'index.html');
  if (!fs.existsSync(distIndexPath)) {
    throw new Error('dist/index.html not found! Run vite build first.');
  }

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });

  try {
    const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
    const appHtml = ReactDOMServer.renderToString(React.createElement(App));

    let template = fs.readFileSync(distIndexPath, 'utf8');
    if (!template.includes('<div id="root"></div>')) {
      console.warn('Warning: <div id="root"></div> not found in dist/index.html or already prerendered.');
      return;
    }

    const renderedHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    fs.writeFileSync(distIndexPath, renderedHtml, 'utf8');
    console.log(`Pre-rendering complete! Injected ${appHtml.length} characters of HTML into dist/index.html.`);
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('Prerender error:', err);
  process.exit(1);
});
