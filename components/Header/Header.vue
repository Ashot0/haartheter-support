<template>
	<header class="header">
		<header-top></header-top>
		<breadcrumbs></breadcrumbs>
		<header-bottom></header-bottom>
	</header>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import HeaderTop from '@/components/Header/HeaderTop/HeaderTop.vue';
import Breadcrumbs from '@/components/Header/Breadcrumbs/Breadcrumbs.vue';
import HeaderBottom from '@/components/Header/HeaderBottom/HeaderBottom.vue';

export default {
	components: { HeaderTop, Breadcrumbs, HeaderBottom },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" src="./header.scss"></style>
