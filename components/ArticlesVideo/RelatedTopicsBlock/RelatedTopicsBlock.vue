<template>
	<div
		class="related-topics-block"
		:class="
			item.page === 'article'
				? 'related-topics-block__article'
				: 'related-topics-block__video'
		"
	>
		<div class="related-topics-block__image">
			<img :src="item.img" alt="Topic" />
		</div>
		<div class="related-topics-block__wrapper">
			<h6 class="related-topics-block__title">{{ item.name }}</h6>
			<p class="related-topics-block__des">{{ item.des }}</p>
			<button
				class="related-topics-block__btn"
				@click="goToPage()"
				type="button"
			>
				{{ item.page === 'article' ? 'READ' : 'WATCH' }}
				<img src="@/assets/images/icons/blackArrow.png" alt="Video" srcset="" />
			</button>
		</div>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref, watch, onMounted } from 'vue';
export default {
	props: {
		item: {
			type: Object,
			default: () => ({}),
		},
	},
	setup(props) {
		const route = ref(null);
		const router = useRouter();
		const goToPage = () => {
			if (props.item.page === 'article') {
				localStorage.setItem('ArticleObject', JSON.stringify(props.item));
				router.replace({
					name: `${props.item.page}`,
					query: { article: props.item.nameSmall },
				});
				if (router.currentRoute.value.name === 'article') {
					setTimeout(() => {
						router.go(0);
					}, 100);
				}
			} else {
				localStorage.setItem('VideoObject', JSON.stringify(props.item));
				router.replace({
					name: `${props.item.page}`,
					query: { video: props.item.nameSmall },
				});
				if (router.currentRoute.value.name === 'video') {
					setTimeout(() => {
						router.go(0);
					}, 100);
				}
			}
		};
		return { goToPage };
	},
};
</script>

<style lang="scss" scoped src="./related-topics-block.scss" />
