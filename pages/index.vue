<template>
	<div class="home-page">
		<BlockBig :page="pages[0].children[0]" />
		<BlockSmall :page="pages[0].children[3]" />
		<BlockBig :page="pages[0].children[1]" />
		<BlockSmall :page="pages[0].children[4]" />
		<BlockSmall :page="pages[0].children[5]" />
		<BlockBig :page="pages[0].children[2]" />
		<BlockSmall :page="pages[0].children[6]" />
	</div>
</template>

<script setup>
import BlockBig from '@/components/HomePage/BlockBig/BlockBig.vue';
import BlockSmall from '~/components/HomePage/BlockSmall/BlockSmall.vue';
import { pages } from './pages.ts';
</script>

<style lang="scss" scoped>
.home-page {
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}

@media (max-width: 1068px) {
	.home-page {
		:nth-child(1) {
			order: 1;
		}
		:nth-child(2) {
			order: 2;
		}
		:nth-child(3) {
			order: 4;
		}
		:nth-child(4) {
			order: 3;
		}
		:nth-child(5) {
			order: 6;
		}
		:nth-child(6) {
			order: 5;
		}
		:nth-child(7) {
			order: 7;
		}
	}
}
</style>
