<template>
	<div class="article-block">
		<img class="article-block__img" :src="article.img" alt="Image" />
		<p class="article-block__name">{{ article.name }}</p>
		<p class="article-block__des">{{ article.des }}</p>
		<div class="article-block__info">
			<p class="article-block__date">{{ article.date }}</p>
			<button
				@click="goToPage(article)"
				class="article-block__btn"
				type="button"
			>
				READ <img src="@/assets/images/icons/blackArrow.png" alt="Image" />
			</button>
		</div>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
	props: { article: Object },
	setup() {
		const router = useRouter();
		const goToPage = (page) => {
			localStorage.setItem('ArticleObject', JSON.stringify(page));
			router.push({
				name: `${page.page}`,
				query: { article: `${page.name}` },
			});
		};
		return {
			goToPage,
		};
	},
};
</script>

<style lang="scss" scoped src="./articles-block.scss" />
