// Bakes the rendered page into dist/index.html so content paints before the JS bundle loads.
// Runs after the client build: `vite build && vite build --ssr ... && node scripts/prerender.mjs`.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const indexPath = `${root}dist/index.html`;
const serverEntry = `${root}dist-ssr/entry-server.js`;

const { render } = await import(pathToFileURL(serverEntry).href);
const template = readFileSync(indexPath, 'utf8');
const marker = '<div id="root"></div>';

if (!template.includes(marker)) throw new Error(`prerender: ${marker} not found in dist/index.html`);

writeFileSync(indexPath, template.replace(marker, `<div id="root">${render()}</div>`));
rmSync(`${root}dist-ssr`, { recursive: true, force: true });
console.log('prerender: wrote dist/index.html');
