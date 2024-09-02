<template>
	<div class="block-header">
		<p class="block-header__title">{{ title }}</p>

		<select class="block-header__select" name="" id="">
			<option>Newest</option>
		</select>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped src="./block-header.scss" />
