/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    remotePatterns: [
        {hostname: 'strapi.bayesian-labs.com', protocol:'https'},
        {hostname: 'localhost', protocol:'http'},
    ],
    unoptimized: true,
  },
  webpack(config) {
      const path = require('path');
      config.resolve.alias['@'] = path.resolve(__dirname, 'src');
      return config;
  },
};

module.exports = nextConfig;
