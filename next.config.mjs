/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // public/admin/index.html isn't served automatically for the
      // directory URL, so map it explicitly.
      { source: '/admin', destination: '/admin/index.html' },
    ];
  },
};

export default nextConfig;
