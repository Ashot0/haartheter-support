<template>
	<div class="search-page">
		<div
			v-if="articlesSearch.length || videosSearch.length"
			class="search-page__wrapper"
		>
			<div class="search-page__articles" v-if="articlesSearch.length">
				<BlockHeader class="search-page__header" :title="'Article'" />
				<div v-for="article in articlesSearch" :key="article.id">
					<RelatedTopicsBlock :item="article" />
				</div>
			</div>
			<div class="search-page__video" v-if="videosSearch.length">
				<BlockHeader class="search-page__header" :title="'Video'" />
				<div v-for="video in videosSearch" :key="video.id">
					<RelatedTopicsBlock :item="video" />
				</div>
			</div>
		</div>
		<div v-else><EmptyBlock :search="true" /></div>
	</div>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue';
import { pages } from '@/pages/pages';
import RelatedTopicsBlock from '../components/ArticlesVideo/RelatedTopicsBlock/RelatedTopicsBlock';
import BlockHeader from '@/components/ArticlesVideo/BlockHeader/BlockHeader.vue';
import EmptyBlock from '@/components/ArticlesVideo/EmptyBlock/EmptyBlock';
export default {
	components: {
		EmptyBlock,
		BlockHeader,
		RelatedTopicsBlock,
	},
	setup() {
		const searchQuery = ref('');

		const articlesSearch = ref([]);
		const videosSearch = ref([]);

		const search = () => {
			articlesSearch.value = [];
			videosSearch.value = [];
			const query = searchQuery.value.toLowerCase();

			pages[0].children.forEach((homeInner) => {
				homeInner.children.forEach((articleVideo) => {
					articleVideo.articles.forEach((article) => {
						if (article.name.toLowerCase().includes(query)) {
							articlesSearch.value.push(article);
						}
					});
					articleVideo.videos.forEach((video) => {
						if (video.name.toLowerCase().includes(query)) {
							videosSearch.value.push(video);
						}
					});
				});
			});
		};
		const loadSearchQuery = () => {
			if (typeof window !== 'undefined') {
				searchQuery.value = localStorage.getItem('searchQuery') || '';
				search();
			}
		};

		onMounted(() => {
			loadSearchQuery();
			if (typeof window !== 'undefined') {
				window.addEventListener('storage', loadSearchQuery);
			}
		});

		onUnmounted(() => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('storage', loadSearchQuery);
			}
		});
		watch(searchQuery, search);
		return {
			searchQuery,
			articlesSearch,
			videosSearch,
			search,
		};
	},
};
</script>

<style lang="scss" scoped>
.search-page {
	&__header {
		position: absolute;
		top: -50px;
	}
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
		flex-direction: column;
		justify-content: start;
		align-items: center;
		flex-wrap: wrap;
		max-width: fit-content;
		gap: 20px;
		position: relative;
	}
	&__video {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		flex-wrap: wrap;
		max-width: fit-content;
		gap: 20px;
		position: relative;
	}
}
@media (max-width: 1708px) {
	.search-page {
		&__wrapper {
			flex-wrap: wrap;
			gap: 40px;
		}
		&__articles,
		&__video {
			width: 100%;

			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
}
</style>
