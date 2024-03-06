/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**', // Use */ instead of ** to match any path under /f/
            }
        ]
    }
};

export default nextConfig;
