<template>
	<header class="header">
		<div class="header__top">
			<div class="header__gag"></div>
			<div class="header__logo">
				<img src="../../assets/images/Global/logo.png" alt="Logo" />
			</div>
			<button type="button" class="header__logout">
				<nuxt-link to="/Login">
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
						alt=""
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
					to="/SearchPage"
				>
					SEARCH
				</nuxt-link>
			</div>
		</div>
	</header>
</template>

<script>
import { ref, watch, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
	setup() {
		const router = useRouter();
		const route = ref(router.currentRoute.value);
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
				['HomeInner', 'ArticlesVideo', 'Article', 'Video'].includes(
					route.value.name
				)
			) {
				links.push({ to: '/HomeInner', name: pageObject.value.name });
			}
			if (['ArticlesVideo', 'Article', 'Video'].includes(route.value.name)) {
				links.push({ to: '/ArticlesVideo', name: homeInnerObject.value.name });
			}
			if (route.value.name === 'Article') {
				links.push({ to: '/Article', name: articleObject.value.name });
			}
			if (route.value.name === 'Video') {
				links.push({ to: '/Video', name: videoObject.value.name });
			}
			return links;
		});
		const headerTitle = computed(() => {
			switch (route.value.name) {
				case 'Home':
				case 'index':
					return 'Welcome to Support';
				case 'HomeInner':
					return pageObject.value.name;
				case 'ArticlesVideo':
					return homeInnerObject.value.name;
				case 'Article':
					return articleObject.value.name;
				case 'Video':
					return videoObject.value.name;
				case 'SearchPage':
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
