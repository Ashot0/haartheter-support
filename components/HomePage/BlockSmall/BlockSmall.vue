<template>
	<div @click="goToPage(page)" class="block-small">
		<img class="block-small__image" :src="page.img" alt="" />
		<div class="block-small__wrapper">
			<p class="block-small__name">{{ page.name }}</p>
			<div class="block-small__info">
				<p v-if="totalArticles" class="block-small__articles">
					{{ totalArticles }} articles
				</p>
				<p v-if="totalVideos" class="block-small__video">
					{{ totalVideos }} video
				</p>
			</div>
			<button type="button" class="block-small__btn">
				Read <img src="@/assets/images/icons/blackArrow.png" alt="" />
			</button>
		</div>
	</div>
</template>

<script>
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
		return { goToPage, totalVideos, totalArticles };
	},
};
</script>

<style lang="scss" scoped src="./block-small.scss" />
