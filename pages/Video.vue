<template>
	<div><VideoPageBlock :video="VideoObject" /></div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import VideoPageBlock from '@/components/ArticlesVideo/VideoPageBlock/VideoPageBlock';
import { ref, onMounted } from 'vue';
import { pages } from './pages';
const VideoObject = ref('');
const router = useRouter();
const route = useRoute();
onMounted(() => {
	const data = localStorage.getItem('VideoObject');
	if (route.query.video) {
		const queryData = route.query?.video;
		const page = pages[0].children
			.flatMap((pages) => pages.children)
			.flatMap((pages) => pages.videos)
			.find((item) => item.name === queryData);
		VideoObject.value = page;
	} else {
		if (data) {
			try {
				VideoObject.value = JSON.parse(data);
			} catch (e) {
				console.error('Ошибка при парсинге данных', e);
			}
		} else {
			router.push(`/`);
		}
	}
});
</script>

<style lang="scss" scoped></style>
