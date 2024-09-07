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
			if (props.item.page === 'article') {
				localStorage.setItem('ArticleObject', JSON.stringify(props.item));
				router.push({
					name: `${props.item.page}`,
					query: { article: props.item.nameSmall },
				});
			} else {
				localStorage.setItem('VideoObject', JSON.stringify(props.item));
				router.push({
					name: `${props.item.page}`,
					query: { video: props.item.nameSmall },
				});
			}
		};
		return { goToPage };
	},
};
</script>

<style lang="scss" scoped src="./related-topics-block.scss" />
