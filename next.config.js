/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        // 匹配所有路径
        source: '/:path*',
        // 重定向到目标网站
        destination: 'https://tinymind.me/OldHunter0',
        // 永久重定向 (301)
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 