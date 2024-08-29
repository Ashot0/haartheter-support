<template>
	<div class="articles-video-page">
		<div
			v-if="homeInnerObject.articles != 0 || homeInnerObject.videos != 0"
			class="articles-video-page__wrapper"
		>
			<div
				class="articles-video-page__articles"
				v-if="homeInnerObject.articles != 0"
			>
				<BlockHeader :title="'Article'" />
				<div v-for="article in homeInnerObject.articles">
					<ArticlesBlock :article="article" />
				</div>
			</div>
			<div
				class="articles-video-page__video"
				v-if="homeInnerObject.videos != 0"
			>
				<BlockHeader :title="'Video'" />
				<div v-for="video in homeInnerObject.videos">
					<VideoBlock :video="video" />
				</div>
			</div>
		</div>
		<div v-else><EmptyBlock /></div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import ArticlesBlock from '@/components/ArticlesVideo/ArticlesBlock/ArticlesBlock.vue';
import VideoBlock from '~/components/ArticlesVideo/VideoBlock/VideoBlock.vue';
import BlockHeader from '@/components/ArticlesVideo/BlockHeader/BlockHeader.vue';
import EmptyBlock from '@/components/ArticlesVideo/EmptyBlock/EmptyBlock';
const homeInnerObject = ref('');
const router = useRouter();
onMounted(() => {
	const data = localStorage.getItem('homeInnerObject');
	if (data) {
		try {
			homeInnerObject.value = JSON.parse(data);
		} catch (e) {
			console.error('Ошибка при парсинге данных', e);
		}
	} else {
		router.push(`/`);
	}
});
</script>

<style lang="scss" scoped>
.articles-video-page {
	&__wrapper {
		width: 100%;
		display: flex;
		gap: 80px;
		position: relative;
		padding-top: 60px;
	}
	&__articles {
		display: flex;
		flex-wrap: wrap;
		max-width: fit-content;
		width: 50%;
		gap: 20px;
		position: relative;
	}
	&__video {
		display: flex;
		flex-wrap: wrap;
		max-width: fit-content;
		width: 50%;
		// max-width: 50vw;
		gap: 20px;
		position: relative;
	}
}
@media (max-width: 768px) {
	.articles-video-page {
		&__wrapper {
			flex-wrap: wrap;
		}
	}
}
</style>
