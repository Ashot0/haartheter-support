<template>
	<div>
		<ArticlePageBlock v-if="ArticleObject" :article="ArticleObject" />
	</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import ArticlePageBlock from '@/components/ArticlesVideo/ArticlePageBlock/ArticlePageBlock';
import { ref, onMounted } from 'vue';
import { pages } from './pages';
const ArticleObject = ref('');
const router = useRouter();
const route = useRoute();
onMounted(() => {
	const data = localStorage.getItem('ArticleObject');
	if (data) {
		try {
			ArticleObject.value = JSON.parse(data);
		} catch (e) {
			console.error('Ошибка при парсинге данных', e);
			router.push(`/`);
		}
	} else if (route.query.article) {
		const queryData = route.query.article;
		const page = pages[0].children
			.flatMap((pages) => pages.children)
			.flatMap((items) => items.articles)
			.find((item) => item.name === queryData);
		ArticleObject.value = page;
		localStorage.setItem('ArticleObject', JSON.stringify(page));
		if (page) {
			ArticleObject.value = page;
			localStorage.setItem('ArticleObject', JSON.stringify(page));
		} else {
			router.push(`/`);
		}
	} else {
		router.push(`/`);
	}
});
</script>

<style lang="scss" scoped></style>
