import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.36"],
  async redirects() {
    return [
      {
        source: "/Anurag_Gaikwad_Data_Engineer_Resume.pdf",
        destination: "/Anurag_Gaikwad_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
