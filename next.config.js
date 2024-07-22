import { surveyConfig } from './src/config/surveyConfig.mjs';
import { SURVEY_PATH } from './src/utils/consts.mjs';

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: '/',
        destination: `${SURVEY_PATH}/${surveyConfig[0].slug}`,
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
