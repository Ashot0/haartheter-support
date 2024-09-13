<template>
	<form @submit.prevent="startSearch" class="search-form">
		<input
			class="search-form__input"
			type="text"
			placeholder="Search"
			v-model="searchQuery"
		/>
		<button type="submit" class="search-form__btn">SEARCH</button>
	</form>
</template>

<script>
import { ref, watch, onMounted, defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default defineComponent({
	name: 'SearchForm',
	props: {},
	setup(props, { emit }) {
		const router = useRouter();
		const searchQuery = ref('');

		const updateSearch = () => {
			if (typeof window !== 'undefined') {
				localStorage.setItem('searchQuery', searchQuery.value);
				window.dispatchEvent(new Event('storage'));
				router.push({
					path: '/search-page',
					query: { search: searchQuery.value },
				});
			}
		};

		const startSearch = (event) => {
			event.preventDefault();
			router.push({
				path: '/search-page',
				query: { search: searchQuery.value },
			});
		};

		watch(searchQuery, updateSearch);

		onMounted(() => {
			searchQuery.value = localStorage.getItem('searchQuery') || '';
		});

		return {
			searchQuery,
			startSearch,
		};
	},
});
</script>

<style scoped lang="scss" src="./search-form.scss" />
