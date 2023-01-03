/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		domains: ['openweathermap.org'],
	},
};

module.exports = nextConfig;
