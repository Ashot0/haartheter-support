<template>
	<div class="header-bottom">
		<div class="header-bottom__title">
			<p>{{ headerTitle }}</p>
		</div>
		<search-form></search-form>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import SearchForm from '@/components/Header/SearchForm/SearchForm.vue';

export default defineComponent({
	name: 'HeaderBottom',
	components: { SearchForm },
	props: {},
	setup(props, { emit }) {
		const currentRoute = useRoute();

		const capitalizeFirstLetter = (string) => {
			if (!string) return '';
			const formattedString = string.replace(/-/g, ' ');
			return (
				formattedString.charAt(0).toUpperCase() +
				formattedString.slice(1).toLowerCase()
			);
		};

		const headerTitle = computed(() => {
			const query = currentRoute.query;
			switch (currentRoute.name) {
				case 'Home':
				case 'index':
					return 'Welcome to Support';
				case 'home-inner':
					return capitalizeFirstLetter(query.page);
				case 'articles-list':
					return capitalizeFirstLetter(query.list);
				case 'article':
					return capitalizeFirstLetter(query.article);
				case 'video':
					return capitalizeFirstLetter(query.video);
				case 'search-page':
					return 'Search';
				default:
					return currentRoute.name || 'Unknown Page';
			}
		});
		return {
			headerTitle,
		};
	},
});
</script>

<style scoped lang="scss" src="./header-bottom.scss" />
