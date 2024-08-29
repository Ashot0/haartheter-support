<template>
	<div class="video-block">
		<div class="video-block__video">
			<img src="../../../assets/images/ArticlesVideo/Video.png" alt="" />
		</div>
		<div class="video-block__text">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum.
		</div>
		<div class="video-block__info-block">
			<p class="video-block__contact">Contact info</p>
			<div class="video-block__info-wrapper">
				<div>
					<h4 class="video-block__contact-name">JAke (assistant)</h4>
					<p class="video-block__contact-num">8654783493834</p>
				</div>
				<div>
					<h4 class="video-block__contact-name">JULIA (Manager)</h4>
					<p class="video-block__contact-num">5798537598348</p>
				</div>
			</div>
		</div>
		<div class="video-block__related-topics-block">
			<h4 class="video-block__related-topics-title">Related Topics</h4>
			<div class="video-block__related-topics-wrapper">
				<RelatedTopicsBlock :item="$props.video" />
				<RelatedTopicsBlock :item="$props.video" />
				<RelatedTopicsBlock :item="$props.video" />
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
		video: {
			type: Object,
			default: () => ({}),
		},
	},
	setup(props) {},
};
</script>

<style lang="scss" scoped src="./video-page-block.scss" />
