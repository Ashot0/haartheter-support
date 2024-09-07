<template>
	<div class="video-block">
		<img class="video-block__img" :src="video.img" alt="Video" />
		<p class="video-block__name">{{ video.name }}</p>
		<p class="video-block__des">{{ video.des }}</p>
		<div class="video-block__info">
			<p class="video-block__date">{{ video.date }}</p>
			<button
				@click.prevent="goToPage(video)"
				class="video-block__btn"
				type="button"
			>
				Watch
				<img src="@/assets/images/icons/blackArrow.png" alt="Video block" />
			</button>
		</div>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
	props: {
		video: Object,
	},
	setup() {
		const router = useRouter();
		const goToPage = (page) => {
			if (page.page) {
				localStorage.setItem('VideoObject', JSON.stringify(page));
				router.push({
					path: '/video',
					query: { video: page.nameSmall },
				});
			} else {
				console.error("Missing 'page' property in video object");
			}
		};
		return {
			goToPage,
		};
	},
};
</script>

<style lang="scss" scoped src="./video-block.scss" />
