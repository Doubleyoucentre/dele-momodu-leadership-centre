import type { NextConfig } from 'next';

const pagesBuild = process.env.DMLC_GITHUB_PAGES === 'true';

const nextConfig: NextConfig = pagesBuild
  ? {
      output: 'export',
      basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '/dele-momodu-leadership-centre',
      trailingSlash: true,
      images: { unoptimized: true },
      typescript: { tsconfigPath: 'tsconfig.pages.json' },
    }
  : {};

export default nextConfig;
