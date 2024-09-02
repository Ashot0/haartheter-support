<template>
	<div class="home-inner-buttom-block">
		<div class="home-inner-buttom-block__wrapper">
			<div class="home-inner-buttom-block__title">
				{{ assistance ? 'Need assistance?' : 'Training' }}
			</div>
			<div class="home-inner-buttom-block__text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore
			</div>
			<PopupAssist :isOpen="isPopupOpen" @close="hidePopup" />
			<button
				v-if="assistance"
				@click="showPopup"
				class="home-inner-buttom-block__btn"
			>
				contact
			</button>
			<button
				v-else
				@click="goToTrainingPage(pages)"
				class="home-inner-buttom-block__btn"
			>
				learn more
			</button>
		</div>
		<div class="home-inner-buttom-block__image">
			<img
				v-if="$assistance"
				src="@/assets/images/HomeInner/assistance1.png"
				alt=""
				srcset=""
			/>
			<img
				v-else
				src="@/assets/images/HomeInner/assistance2.png"
				alt=""
				srcset=""
			/>
		</div>
	</div>
</template>

<script>
import { pages } from '@/pages/pages.ts';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import PopupAssist from '@/components/Popups/PopupAssist/PopupAssist.vue';
export default {
	props: {
		assistance: Boolean,
	},
	components: {
		PopupAssist,
	},
	setup() {
		const isPopupOpen = ref(false);

		const showPopup = () => {
			isPopupOpen.value = true;
		};

		const hidePopup = () => {
			isPopupOpen.value = false;
		};

		const router = useRouter();
		const goToTrainingPage = (pages) => {
			localStorage.setItem('pageObject', JSON.stringify(pages[0].children[5]));
			router
				.push({
					name: 'home-inner',
				})
				.then(() => {
					router.go(0);
				});
		};
		return { showPopup, hidePopup, isPopupOpen, goToTrainingPage, pages };
	},
};
</script>

<style lang="scss" scoped src="./home-inner-buttom-block.scss" />
