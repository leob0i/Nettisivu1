import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1) 301 redirect vanhasta polusta uuteen
  async redirects() {
    return [
      // FI
      {
        source: "/services/asiakaspalvelubotti",
        destination: "/asiakaspalvelubotti",
        permanent: true, // = 301
      },
      {
        source: "/services/asiakaspalvelubotti/",
        destination: "/asiakaspalvelubotti",
        permanent: true,
      },

      // EN
      {
        source: "/en/services/asiakaspalvelubotti",
        destination: "/en/asiakaspalvelubotti",
        permanent: true,
      },
      {
        source: "/en/services/asiakaspalvelubotti/",
        destination: "/en/asiakaspalvelubotti",
        permanent: true,
      },
    ];
  },

  // 2) Sun nykyinen rewrite pysyy ennallaan
  async rewrites() {
    return [
      {
        source: "/api/bot",
        destination: "https://leobot-gpaj.onrender.com/webchat",
      },
    ];
  },
};

export default nextConfig;
