<template>
	<div class="home-inner-page">
		<div class="home-inner-page__top">
			<div
				class="home-inner-page__block"
				v-for="page in pageObject.children"
				:key="page.name"
			>
				<HomeInnerBlock :page="page" />
			</div>
		</div>
		<div class="home-inner-page__buttom">
			<HomeInnerButtonBlock :assistance="true" />
			<HomeInnerButtonBlock
				v-if="pageObject.name != 'Training' && pageObject.name != 'Sales'"
				:assistance="false"
			/>
			<div v-else class="home-inner-page__gag"></div>
		</div>
	</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import HomeInnerBlock from '@/components/HomeInnerPage/HomeInnerBlock/HomeInnerBlock.vue';
import HomeInnerButtonBlock from '../components/HomeInnerPage/HomeInnerButtomBlock/HomeInnerButtomBlock';
import { pages } from './pages';
const pageObject = ref('');
const router = useRouter();
const route = useRoute();

onMounted(() => {
	const data = localStorage.getItem('pageObject');
	if (route.query.page) {
		const queryData = route.query?.page;
		const page = pages[0].children.find((page) => page.nameSmall === queryData);
		pageObject.value = page;
	} else {
		if (data) {
			try {
				pageObject.value = JSON.parse(data);
			} catch (e) {
				console.error('Ошибка при парсинге данных', e);
			}
		} else {
			router.push(`/`);
		}
	}
});
</script>

<style lang="scss" scoped>
.home-inner-page {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 100px;
	&__top {
		display: flex;
		align-items: stretch;
		gap: 20px;
		flex-wrap: wrap;
	}
	&__block {
		flex-grow: 1;
		flex-basis: 0;
	}
	&__buttom {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 20px;
	}
	&__gag {
		width: 790px;
	}
}
@media (max-width: 768px) {
	.home-inner-page {
		gap: 60px;
		&__top {
			justify-content: center;
			flex-wrap: wrap;
		}
		&__block {
			flex-grow: 0;
			flex-basis: 0;
		}
		&__buttom {
			flex-direction: column;
		}
		&__gag {
			display: none;
		}
	}
}
</style>
