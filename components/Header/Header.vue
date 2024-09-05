<template>
	<header class="header">
		<div class="header__top">
			<div class="header__gag"></div>
			<div class="header__logo">
				<img src="../../assets/images/Global/logo.png" alt="Logo" />
			</div>
			<button type="button" class="header__logout">
				<nuxt-link to="/log-in">
					<img src="../../assets/images/icons/logout.png" alt="Logout" />
				</nuxt-link>
			</button>
		</div>
		<nav class="header__breadcrumbs">
			<nuxt-link class="header__link" to="/">Home</nuxt-link>
			<template v-for="(link, index) in breadcrumbLinks" :key="index">
				<nuxt-link class="header__link" :to="link.to">
					<img
						class="header__symbol"
						src="@/assets/images/icons/pseudo.png"
						alt="symbol"
					/>
					{{ link.name }}
				</nuxt-link>
			</template>
		</nav>
		<div class="header__bottom">
			<div class="header__title">
				<p>{{ headerTitle }}</p>
			</div>
			<div class="header__search">
				<input
					class="header__search-input"
					type="text"
					placeholder="Search"
					v-model="searchQuery"
				/>
				<nuxt-link
					@click="updateSearch"
					class="header__search-btn"
					to="/search-page"
				>
					SEARCH
				</nuxt-link>
			</div>
		</div>
	</header>
</template>

<script>
import { ref, watch, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
	setup() {
		const router = useRouter();
		const route = ref(router.currentRoute.value);
		const routee = useRoute();
		const searchQuery = ref('');
		const pageObject = ref({});
		const homeInnerObject = ref({});
		const articleObject = ref({});
		const videoObject = ref({});

		const updateSearch = () => {
			if (typeof window !== 'undefined') {
				localStorage.setItem('searchQuery', searchQuery.value);
				window.dispatchEvent(new Event('storage'));
			}
		};

		const loadLocalStorageData = (key, refObj) => {
			const data = localStorage.getItem(key);
			if (data) {
				try {
					refObj.value = JSON.parse(data);
				} catch (e) {
					console.error(`Error parsing ${key} data`, e);
				}
			} else {
				refObj.value = { name: '' };
			}
		};

		const initializeData = () => {
			if (typeof window !== 'undefined') {
				searchQuery.value = localStorage.getItem('searchQuery') || '';
			}
			loadLocalStorageData('pageObject', pageObject);
			loadLocalStorageData('homeInnerObject', homeInnerObject);
			loadLocalStorageData('ArticleObject', articleObject);
			loadLocalStorageData('VideoObject', videoObject);
		};

		onMounted(() => {
			initializeData();
		});

		watch(searchQuery, updateSearch);
		watch(router.currentRoute, (newRoute) => {
			route.value = newRoute;
			initializeData();
		});

		const isHome = computed(
			() => route.value.name === 'Home' || route.value.name === 'index'
		);
		const breadcrumbLinks = computed(() => {
			const links = [];
			if (
				['home-inner', 'articles-list', 'article', 'video'].includes(
					route.value.name
				)
			) {
				links.push({ to: '/home-inner', name: pageObject.value.name });
			} else if (routee.query.page) {
				links.push({ to: '/home-inner', name: routee.query.page });
			}

			if (['articles-list', 'article', 'video'].includes(route.value.name)) {
				if (routee.query.list) {
					links.push({ to: '/articles-list', name: routee.query.list });
				} else {
					links.push({
						to: '/articles-list',
						name: homeInnerObject.value.name,
					});
				}
			}

			if (route.value.name === 'article') {
				if (!routee.query.article) {
					links.push({ to: '/article', name: articleObject.value.name });
				} else {
					links.push({ to: '/article', name: routee.query.article });
				}
			}

			if (route.value.name === 'video') {
				if (!routee.query.video) {
					links.push({ to: '/video', name: videoObject.value.name });
				} else {
					links.push({ to: '/video', name: routee.query.video });
				}
			}

			return links;
		});

		const headerTitle = computed(() => {
			switch (route.value.name) {
				case 'Home':
				case 'index':
					return 'Welcome to Support';
				case 'home-inner':
					return routee.query.page || pageObject.value.name;
				case 'articles-list':
					return routee.query.list || homeInnerObject.value.name;
				case 'article':
					return routee.query.article || articleObject.value.name;
				case 'video':
					return routee.query.video || videoObject.value.name;
				case 'search-page':
					return 'Search';
				default:
					return route.value.name;
			}
		});

		return {
			route,
			searchQuery,
			updateSearch,
			isHome,
			breadcrumbLinks,
			headerTitle,
		};
	},
};
</script>

<style lang="scss" scoped src="./header.scss" />
