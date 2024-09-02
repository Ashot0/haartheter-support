<template>
	<div class="article-block">
		<div class="article-block__top-images">
			<div class="article-block__image article-block__image_1">
				<img src="@/assets/images/ArticlesVideo/Article1.png" alt="" />
			</div>
			<div class="article-block__image article-block__image_2">
				<img src="@/assets/images/ArticlesVideo/Article2.png" alt="" />
			</div>
			<div class="article-block__image article-block__image_3">
				<img src="@/assets/images/ArticlesVideo/Article3.png" alt="" />
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
				mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</p>
			<div class="article-block__video-block">
				<img src="@/assets/images/ArticlesVideo/Video.png" alt="" />
			</div>
			<h2 class="article-block__title">Rule #2</h2>
			<p class="article-block__text-block">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
		<div class="article-block__info-block">
			<p class="article-block__contact">Contact info</p>
			<div class="article-block__info-wrapper">
				<div>
					<h4 class="article-block__contact-name">JAke (assistant)</h4>
					<p class="article-block__contact-num">8654783493834</p>
				</div>
				<div>
					<h4 class="article-block__contact-name">JULIA (Manager)</h4>
					<p class="article-block__contact-num">5798537598348</p>
				</div>
			</div>
		</div>
		<div class="article-block__related-topics-block">
			<h4 class="article-block__related-topics-title">Related Topics</h4>
			<div class="article-block__related-topics-wrapper">
				<RelatedTopicsBlock :item="article" />
				<RelatedTopicsBlock :item="article" />
				<RelatedTopicsBlock :item="article" />
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted } from 'vue';
import RelatedTopicsBlock from '@/components/ArticlesVideo/RelatedTopicsBlock/RelatedTopicsBlock';
export default {
	components: { RelatedTopicsBlock },
	props: {
		article: {
			type: Object,
		},
	},
	setup(props) {},
};
</script>

<style lang="scss" scoped src="./article-page-block.scss" />
