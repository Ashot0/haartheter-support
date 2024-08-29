<template>
	<div
		:class="
			$props.item.page === 'Article'
				? 'related-topics-block related-topics-block__article'
				: 'related-topics-block related-topics-block__video'
		"
	>
		<div class="related-topics-block__image">
			<img :src="$props.item.img" alt="" />
		</div>
		<div class="related-topics-block__wrapper">
			<h6 class="related-topics-block__title">{{ $props.item.name }}</h6>
			<p class="related-topics-block__des">{{ $props.item.des }}</p>
			<button
				class="related-topics-block__btn"
				@click="goToPage()"
				type="button"
			>
				{{ $props.item.page === 'Article' ? 'READ' : 'WATCH' }}
				<img src="@/assets/images/icons/blackArrow.png" alt="" srcset="" />
			</button>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
	props: {
		item: {
			type: Object,
			default: () => ({}),
		},
	},
	setup(props) {
		const router = useRouter();
		const goToPage = () => {
			console.log(props.item);
			if (props.item.page === 'Article') {
				localStorage.setItem('ArticleObject', JSON.stringify(props.item));
				router.push({
					name: `${props.item.page}`,
				});
			} else {
				localStorage.setItem('VideoObject', JSON.stringify(props.item));
				router.push({
					name: `${props.item.page}`,
				});
			}
		};
		return { goToPage };
	},
};
</script>

<style lang="scss" scoped src="./related-topics-block.scss" />
