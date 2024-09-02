<template>
	<div class="empty-block">
		<div class="empty-block__wrapper">
			<div class="empty-block__img">
				<img src="@/assets/images/ArticlesVideo/inbox.png" alt="" />
			</div>
			<div class="empty-block__text">
				{{
					search
						? "Sorry, we can't find what you're looking for!"
						: 'There is no information yet!'
				}}
			</div>
			<button class="empty-block__btn" @click="goToPage(page)" type="button">
				back
			</button>
		</div>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
	props: {
		search: Boolean,
	},
	setup(props) {
		const router = useRouter();
		const goToPage = () => {
			router.push({
				name: `HomeInner`,
			});
		};
		return { goToPage };
	},
};
</script>

<style lang="scss" scoped src="./empty-block.scss" />
