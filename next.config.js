// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
