<template>
	<div><VideoPageBlock :video="VideoObject" /></div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import VideoPageBlock from '@/components/ArticlesVideo/VideoPageBlock/VideoPageBlock';
import { ref, onMounted } from 'vue';
const VideoObject = ref('');
const router = useRouter();
onMounted(() => {
	const data = localStorage.getItem('VideoObject');
	if (data) {
		try {
			VideoObject.value = JSON.parse(data);
		} catch (e) {
			console.error('Ошибка при парсинге данных', e);
		}
	} else {
		router.push(`/`);
	}
});
</script>

<style lang="scss" scoped></style>
