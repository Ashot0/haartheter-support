<template>
	<div @click="goToPage(page)" class="block-big">
		<img class="block-big__image" :src="page.img" alt="" />
		<div class="block-big__wrapper">
			<p class="block-big__name">{{ page.name }}</p>
			<p v-if="totalArticles" class="block-big__articles">
				{{ totalArticles }} articles
			</p>
			<p v-if="totalVideos" class="block-big__video">{{ totalVideos }} video</p>
			<button type="button" class="block-big__btn">
				<img src="@/assets/images/icons/Arrow.png" alt="" />
			</button>
		</div>
	</div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
export default {
	props: { page: Object },
	setup(props) {
		const router = useRouter();
		const goToPage = (page) => {
			localStorage.setItem('pageObject', JSON.stringify(page));
			router.push({
				name: `${page.page}`,
				query: { page: `${page.nameSmall}` },
			});
		};

		const totalArticles = computed(() => {
			return props.page.children.reduce(
				(acc, curr) => acc + curr.articles.length,
				0
			);
		});

		const totalVideos = computed(() => {
			return props.page.children.reduce(
				(acc, curr) => acc + curr.videos.length,
				0
			);
		});
		return {
			goToPage,
			totalVideos,
			totalArticles,
		};
	},
};
</script>

<style lang="scss" scoped src="./block-big.scss" />
