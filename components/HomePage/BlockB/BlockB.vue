<template>
	<div @click="goToPage(page)" class="block-b">
		<img class="block-b__image" :src="page.img" alt="" />
		<div class="block-b__wrapper">
			<p class="block-b__name">{{ page.name }}</p>
			<div class="block-b__info">
				<p v-if="totalArticles" class="block-b__articles">
					{{ totalArticles }} articles
				</p>
				<p v-if="totalVideos" class="block-b__video">{{ totalVideos }} video</p>
			</div>
			<button type="button" class="block-b__btn">
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

<style lang="scss" scoped src="./block-b.scss" />
