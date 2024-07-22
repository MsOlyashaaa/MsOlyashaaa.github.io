import withPlugins from "next-compose-plugins";
import { surveyConfig } from "./src/config/surveyConfig.mjs";
import { SURVEY_PATH } from "./src/utils/consts.mjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const redirects = {
  async redirects() {
    return [
      {
        source: '/',
        destination: `${SURVEY_PATH}/${surveyConfig[0].slug}`,
        permanent: true,
      },
    ];
  },
};

export default withPlugins([redirects], nextConfig);
