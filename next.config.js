const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  async redirects() {
    return [
      {
        source: '/',
        destination: `${basePath}/survey/select-your-gender`,
        permanent: true,
      },
    ];
  },
};

