<template>
	<div>
		<ArticlePageBlock :article="ArticleObject" />
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import ArticlePageBlock from '@/components/ArticlesVideo/ArticlePageBlock/ArticlePageBlock';
import { ref, onMounted } from 'vue';
const ArticleObject = ref('');
const router = useRouter();
onMounted(() => {
	const data = localStorage.getItem('ArticleObject');
	if (data) {
		try {
			ArticleObject.value = JSON.parse(data);
		} catch (e) {
			console.error('Ошибка при парсинге данных', e);
		}
	} else {
		router.push(`/`);
	}
});
</script>

<style lang="scss" scoped></style>
