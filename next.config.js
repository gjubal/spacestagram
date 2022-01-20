module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['apod.nasa.gov'],
	},
	env: {
		NASA_API_URL: process.env.NASA_API_URL,
		NASA_API_KEY: process.env.NASA_API_KEY,
	},
};
