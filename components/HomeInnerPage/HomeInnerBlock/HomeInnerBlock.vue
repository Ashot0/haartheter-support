<template>
	<div class="home-inner-block">
		<img class="home-inner-block__img" :src="page.img" alt="" />
		<p class="home-inner-block__name">{{ page.name }}</p>
		<p class="home-inner-block__des">{{ page.des }}</p>
		<div class="home-inner-block__info">
			<p v-if="page.articles.length" class="home-inner-block__articles">
				{{ page.articles.length }} articles
			</p>
			<p v-if="page.videos.length" class="home-inner-block__videos">
				{{ page.videos.length }} videos
			</p>
		</div>
		<button class="home-inner-block__btn" @click="goToPage(page)" type="button">
			VIEW <img src="@/assets/images/icons/blackArrow.png" alt="" />
		</button>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
	props: { page: Object },
	setup() {
		const router = useRouter();
		const goToPage = (page) => {
			localStorage.setItem('homeInnerObject', JSON.stringify(page));
			router.push({
				name: `${page.page}`,
			});
		};
		return { goToPage };
	},
};
</script>

<style lang="scss" scoped src="./home-inner-block.scss" />
