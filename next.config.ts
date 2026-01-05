import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <--- ADD THIS LINE
  images: {
    unoptimized: true, // <--- AND THIS LINE (Required for static export)
  },
};

export default nextConfig;