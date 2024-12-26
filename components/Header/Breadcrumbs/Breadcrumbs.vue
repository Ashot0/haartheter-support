<template>
	<nav class="breadcrumbs">
		<nuxt-link class="breadcrumbs__link" to="/">Home</nuxt-link>
		<template v-for="(link, index) in breadcrumbLinks" :key="index">
			<nuxt-link class="breadcrumbs__link" :to="link.to">
				<img
					class="breadcrumbs__symbol"
					src="@/assets/images/icons/pseudo.png"
					alt="symbol"
				/>
				{{ link.name }}
			</nuxt-link>
		</template>
	</nav>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
	name: 'Breadcrumbs',
	setup() {
		const route = useRoute();

		const isClient = typeof window !== 'undefined';

		const capitalizeFirstLetter = (string) => {
			if (!string) return '';
			const formattedString = string.replace(/-/g, ' ');
			return (
				formattedString.charAt(0).toUpperCase() +
				formattedString.slice(1).toLowerCase()
			);
		};

		const loadLocalStorageData = (key) => {
			if (isClient && localStorage.getItem(key)) {
				return JSON.parse(localStorage.getItem(key));
			}
			return { name: '' };
		};

		const pageObject = ref(loadLocalStorageData('pageObject'));
		const homeInnerObject = ref(loadLocalStorageData('homeInnerObject'));
		const articleObject = ref(loadLocalStorageData('ArticleObject'));
		const videoObject = ref(loadLocalStorageData('VideoObject'));

		const breadcrumbLinks = computed(() => {
			const links = [];
			const query = route.query;

			if (
				[
					'home-inner',
					'articles-list',
					'article',
					'video',
					'Article',
					'Video',
				].includes(route.name)
			) {
				if (query.page) {
					links.push({
						to: { path: '/home-inner', query: { page: query.page } },
						name: capitalizeFirstLetter(query.page),
					});
				} else {
					links.push({
						to: {
							path: '/home-inner',
							query: { page: pageObject.value.nameSmall },
						},
						name: capitalizeFirstLetter(pageObject.value.name),
					});
				}
			}

			if (
				['articles-list', 'article', 'video', 'Article', 'Video'].includes(
					route.name
				)
			) {
				if (query.list) {
					links.push({
						to: { path: '/articles-list', query: { list: query.list } },
						name: capitalizeFirstLetter(query.list),
					});
				} else {
					links.push({
						to: {
							path: '/articles-list',
							query: { list: homeInnerObject.value.nameSmall },
						},
						name: capitalizeFirstLetter(homeInnerObject.value.name),
					});
				}
			}

			if (route.name === 'Article' || route.name === 'article') {
				if (query.article) {
					links.push({
						to: { path: '/article', query: { article: query.article } },
						name: capitalizeFirstLetter(query.article),
					});
				} else {
					links.push({
						to: {
							path: '/article',
							query: { article: articleObject.value.nameSmall },
						},
						name: capitalizeFirstLetter(articleObject.value.name),
					});
				}
			}

			if (route.name === 'Video' || route.name === 'video') {
				if (query.video) {
					links.push({
						to: { path: '/video', query: { video: query.video } },
						name: capitalizeFirstLetter(query.video),
					});
				} else {
					links.push({
						to: {
							path: '/video',
							query: { video: videoObject.value.nameSmall },
						},
						name: capitalizeFirstLetter(videoObject.value.name),
					});
				}
			}

			return links;
		});

		onMounted(() => {
			if (isClient) {
				pageObject.value = loadLocalStorageData('pageObject');
				homeInnerObject.value = loadLocalStorageData('homeInnerObject');
				articleObject.value = loadLocalStorageData('ArticleObject');
				videoObject.value = loadLocalStorageData('VideoObject');
			}
		});

		return {
			breadcrumbLinks,
		};
	},
});
</script>

<style scoped lang="scss" src="./breadcrumbs.scss" />
