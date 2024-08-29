<template>
	<div v-if="isOpen" class="popup-assist__overlay" @click="closePopup">
		<div class="popup-assist" @click.stop>
			<button class="popup-assist__close-button" @click="closePopup">
				&times;
			</button>
			<div class="popup-assist__wrapper">
				<div class="popup-assist__img">
					<img src="@/assets/images/icons/phone.png" alt="" />
				</div>
				<div class="popup-assist__nums">
					<div>
						<p class="popup-assist__name">Assistant</p>
						<p class="popup-assist__num">+38073852390</p>
					</div>
					<div>
						<p class="popup-assist__name">Manager</p>
						<p class="popup-assist__num">+38073852390</p>
					</div>
					<div>
						<p class="popup-assist__name">Call Center</p>
						<p class="popup-assist__num">+38073852390</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true,
	},
});

const emit = defineEmits(['close']);

const closePopup = () => {
	emit('close');
};
</script>

<style scoped src="./popup-assist.scss" />
