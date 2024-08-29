<template>
	<div class="log-in-page">
		<div class="log-in-page__header">
			<img src="@/assets/images/Global/logo.png" alt="" />
		</div>
		<div class="log-in-page__background">
			<img src="../assets/images/Backg.jpg" alt="" />
		</div>
		<div class="log-in-page__wrapper">
			<LoginBlock />
		</div>
	</div>
</template>

<script setup>
import LoginBlock from '../components/LoginPage/LoginBlock/LoginBlock.vue';

definePageMeta({
	layout: 'login',
});
</script>

<style lang="scss" scoped>
.log-in-page {
	&__header {
		width: 100vw;
		height: 82px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__background {
		width: 100%;
		height: 100vh;
		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	&__wrapper {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
