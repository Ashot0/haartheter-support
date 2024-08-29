// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		// IN EVERY PROJECT IT MUST BE LIKE THIS !!!
		public: {
			api_url: process.env.NUXT_PUBLIC_API_URL,
			ws_url: process.env.NUXT_PUBLIC_WS_URL, // optional
		},
	},
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: ['@/assets/scss/app.scss'],
	layout: 'default',
});
