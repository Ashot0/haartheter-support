<template>
	<div class="video-block">
		<img class="video-block__img" :src="video.img" alt="Video" />
		<p class="video-block__name">{{ video.name }}</p>
		<p class="video-block__des">{{ video.des }}</p>
		<div class="video-block__info">
			<p class="video-block__date">{{ video.date }}</p>
			<button @click="goToPage(video)" class="video-block__btn" type="button">
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
			localStorage.setItem('VideoObject', JSON.stringify(page));
			router.push({
				name: `${page.page}`,
				query: { video: `${page.name}` },
			});
		};
		return {
			goToPage,
		};
	},
};
</script>

<style lang="scss" scoped src="./video-block.scss" />
