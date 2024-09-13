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
					<a href="tel:8654783493834" class="video-block__contact-num"
						>8654783493834</a
					>
				</div>
				<div>
					<h4 class="video-block__contact-name">JULIA (Manager)</h4>
					<a href="tel:5798537598348" class="video-block__contact-num"
						>5798537598348</a
					>
				</div>
			</div>
		</div>
		<div
			v-if="relatedTopics && relatedTopics.length > 0"
			class="video-block__related-topics-block"
		>
			<h4 class="video-block__related-topics-title">More topics</h4>
			<div class="video-block__related-topics-wrapper">
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
		video: {
			type: [Object, String],
			required: true,
		},
	},
	setup(props) {
		const videoItem = ref(null);
		const relatedTopics = ref([]);

		const getRandomNumber = (max) => Math.floor(Math.random() * (max + 1));

		const getRandomPage = () => {
			const page = pages[0].children;
			const uno = getRandomNumber(page.length - 1);
			const children = page[uno].children;
			const duo = getRandomNumber(children.length - 1);
			const videos = children[duo].videos;

			if (videos && videos.length > 0) {
				const tre = getRandomNumber(videos.length - 1);
				return videos[tre];
			}
			return getRandomPage();
		};

		const generateRelatedTopics = () => {
			relatedTopics.value = [getRandomPage(), getRandomPage(), getRandomPage()];
		};
		onMounted(() => {
			if (typeof props.video === 'string') {
				try {
					videoItem.value = JSON.parse(props.video);
				} catch (error) {
					console.error('Ошибка парсинга video:', error);
				}
			} else {
				videoItem.value = props.video;
			}
			generateRelatedTopics();
		});
		return {
			videoItem,
			relatedTopics,
		};
	},
};
</script>

<style lang="scss" scoped src="./video-page-block.scss" />
