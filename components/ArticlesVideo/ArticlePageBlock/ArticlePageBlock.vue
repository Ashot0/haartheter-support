<template>
	<div class="article-block">
		<div class="article-block__top-images">
			<div class="article-block__image article-block__image_1">
				<img src="@/assets/images/ArticlesVideo/Article1.png" alt="Article" />
			</div>
			<div class="article-block__image article-block__image_2">
				<img src="@/assets/images/ArticlesVideo/Article2.png" alt="Article" />
			</div>
			<div class="article-block__image article-block__image_3">
				<img src="@/assets/images/ArticlesVideo/Article3.png" alt="Article" />
			</div>
		</div>
		<div class="article-block__text-blocks">
			<h2 class="article-block__title">Rule #1</h2>
			<p class="article-block__text-block">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
			<div class="article-block__video-block">
				<img src="@/assets/images/ArticlesVideo/Video.png" alt="Video" />
			</div>
			<h2 class="article-block__title">Rule #2</h2>
			<p class="article-block__text-block">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
		</div>
		<div class="article-block__info-block">
			<p class="article-block__contact">Contact info</p>
			<div class="article-block__info-wrapper">
				<div>
					<h4 class="article-block__contact-name">JAke (assistant)</h4>
					<a href="tel:8654783493834" class="article-block__contact-num"
						>8654783493834</a
					>
				</div>
				<div>
					<h4 class="article-block__contact-name">JULIA (Manager)</h4>
					<a href="tel:5798537598348" class="article-block__contact-num"
						>5798537598348</a
					>
				</div>
			</div>
		</div>
		<div
			v-if="relatedTopics && relatedTopics.length > 0"
			class="article-block__related-topics-block"
		>
			<h4 class="article-block__related-topics-title">More topics</h4>
			<div class="article-block__related-topics-wrapper">
				<RelatedTopicsBlock
					v-for="(item, index) in relatedTopics"
					:key="index"
					:item="item"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import RelatedTopicsBlock from '@/components/ArticlesVideo/RelatedTopicsBlock/RelatedTopicsBlock';
import { pages } from '@/pages/pages.ts';

export default {
	components: { RelatedTopicsBlock },
	props: {
		article: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		const articleItem = ref(null);
		const relatedTopics = ref([]);

		const getRandomNumber = (max) => Math.floor(Math.random() * (max + 1));

		const getRandomPage = () => {
			const page = pages[0].children;
			const uno = getRandomNumber(page.length - 1);
			const children = page[uno].children;
			const duo = getRandomNumber(children.length - 1);
			const articles = children[duo].articles;

			if (articles && articles.length > 0) {
				const tre = getRandomNumber(articles.length - 1);
				return articles[tre];
			}
			return getRandomPage();
		};

		const generateRelatedTopics = () => {
			relatedTopics.value = [getRandomPage(), getRandomPage(), getRandomPage()];
		};

		onMounted(() => {
			if (typeof props.article === 'string') {
				try {
					articleItem.value = JSON.parse(props.article);
				} catch (error) {
					console.error('Ошибка парсинга article:', error);
				}
			} else {
				articleItem.value = props.article;
			}
			generateRelatedTopics();
		});
		return {
			articleItem,
			relatedTopics,
		};
	},
};
</script>

<style lang="scss" scoped src="./article-page-block.scss" />
