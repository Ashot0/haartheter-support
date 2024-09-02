<template>
	<div class="articles-video-page">
		<div
			v-if="
				homeInnerObject.articles?.length !== 0 ||
				homeInnerObject.videos?.length !== 0
			"
			class="articles-video-page__wrapper"
		>
			<div
				class="articles-video-page__articles"
				v-if="homeInnerObject.articles?.length != 0"
			>
				<BlockHeader :title="'Article'" />
				<div v-for="article in homeInnerObject.articles">
					<ArticlesBlock :article="article" />
				</div>
			</div>
			<div
				class="articles-video-page__video"
				v-if="homeInnerObject.videos?.length != 0"
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
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import ArticlesBlock from '@/components/ArticlesVideo/ArticlesBlock/ArticlesBlock.vue';
import VideoBlock from '~/components/ArticlesVideo/VideoBlock/VideoBlock.vue';
import BlockHeader from '@/components/ArticlesVideo/BlockHeader/BlockHeader.vue';
import EmptyBlock from '@/components/ArticlesVideo/EmptyBlock/EmptyBlock';
import { pages } from './pages';
const homeInnerObject = ref('');
const router = useRouter();
const route = useRoute();
onMounted(() => {
	const data = localStorage.getItem('homeInnerObject');
	if (route.query.list) {
		const queryData = route.query?.list;
		const page = pages[0].children
			.flatMap((pages) => pages.children)
			.find((item) => item.name === queryData);
		homeInnerObject.value = page;
	} else {
		if (data) {
			try {
				homeInnerObject.value = JSON.parse(data);
			} catch (e) {
				console.error('Ошибка при парсинге данных', e);
			}
		} else {
			router.push(`/`);
		}
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
		justify-content: center;
		padding-top: 60px;
	}
	&__articles {
		display: flex;
		flex-wrap: wrap;
		max-width: fit-content;
		justify-content: center;
		width: 50%;
		gap: 20px;
		position: relative;
	}
	&__video {
		display: flex;
		flex-wrap: wrap;
		max-width: fit-content;
		justify-content: center;
		width: 50%;
		gap: 20px;
		position: relative;
	}
}
@media (max-width: 1068px) {
	.articles-video-page {
		&__wrapper {
			flex-wrap: wrap;
		}
		&__articles,
		&__video {
			width: fit-content;
		}
	}
}
</style>
