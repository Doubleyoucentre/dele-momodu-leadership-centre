import { spawnSync } from 'node:child_process';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/dele-momodu-leadership-centre';
const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build', '--webpack'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    DMLC_GITHUB_PAGES: 'true',
    NEXT_TELEMETRY_DISABLED: '1',
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? `https://doubleyoucentre.github.io${basePath}`,
  },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
await import('./verify-pages.mjs');
