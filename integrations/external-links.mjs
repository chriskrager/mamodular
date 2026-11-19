// After the build, make every external link open in a new tab.
// Covers links in pages, components and data files, so new links are handled automatically.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SELF = /^https?:\/\/(www\.)?mamodular\.com(\/|$)/i;

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });
}

export function rewrite(html) {
  return html.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/g, (all, attrs, inner) => {
    const m = attrs.match(/\shref="(https?:\/\/[^"]*)"/i);
    if (!m || SELF.test(m[1])) return all;
    let a = attrs.replace(/\s(target|rel)="[^"]*"/gi, '');
    a += ' target="_blank" rel="noopener noreferrer"';
    const note = inner.includes('opens in a new tab') ? '' : '<span class="sr-only"> (opens in a new tab)</span>';
    return `<a${a}>${inner}${note}</a>`;
  });
}

export default function externalLinks() {
  return {
    name: 'external-links-new-tab',
    hooks: {
      'astro:build:done': ({ dir }) => {
        for (const file of walk(fileURLToPath(dir))) {
          const before = readFileSync(file, 'utf8');
          const after = rewrite(before);
          if (after !== before) writeFileSync(file, after);
        }
      },
    },
  };
}
