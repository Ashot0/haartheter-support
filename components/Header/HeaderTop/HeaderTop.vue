<template>
	<div class="header-top">
		<div class="header-top__gag"></div>
		<div class="header-top__logo">
			<img src="@/assets/images/Global/logo.png" alt="Logo" />
		</div>
		<button type="button" class="header-top__logout">
			<nuxt-link to="/log-in">
				<img src="@/assets/images/icons/logout.png" alt="Logout" />
			</nuxt-link>
		</button>
	</div>
</template>

<script>
export default {
	name: 'HeaderTop',
	setup() {},
};
</script>

<style scoped lang="scss" src="./header-top.scss" />
