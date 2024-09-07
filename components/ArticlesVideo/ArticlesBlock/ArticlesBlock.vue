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
		const goToPage = (article) => {
			try {
				if (article.name) {
					localStorage.setItem('ArticleObject', JSON.stringify(article));
					router.push({
						path: '/article',
						query: { article: article.nameSmall },
					});
				} else {
					console.error('Article name is missing');
				}
			} catch (error) {
				console.error('Error during navigation:', error);
			}
		};
		return {
			goToPage,
		};
	},
};
</script>

<style lang="scss" scoped src="./articles-block.scss" />
