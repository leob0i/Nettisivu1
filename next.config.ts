import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ...voit pitää muut asetuksesi tässä

  async rewrites() {
    return [
      {
        source: "/api/bot",
        destination: "https://leobot-gpaj.onrender.com/webchat", // Render-backendisi
      },
    ];
  },
};

export default nextConfig;
