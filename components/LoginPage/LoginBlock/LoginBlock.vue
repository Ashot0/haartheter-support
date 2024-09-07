<template>
	<form class="login-block" @submit.prevent="onSubmit">
		<h2 class="login-block__title">Support</h2>
		<div class="login-block__login-wrapper">
			<input
				class="login-block__login"
				placeholder="Je e-mailadres"
				v-model="email"
				type="email"
				id="username"
				required
			/>
		</div>
		<div class="login-block__password-wrapper">
			<input
				class="login-block__password"
				placeholder="Password"
				v-model="password"
				type="password"
				id="password"
				required
			/>
		</div>
		<div class="login-block__remember-me-wrapper">
			<label class="login-block__remember-me-label">
				<input
					class="login-block__remember-me"
					v-model="rememberMe"
					type="checkbox"
				/>
				Keep me logged in
			</label>
		</div>
		<button class="login-block__button" type="submit">log in</button>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const error = ref('');

const { login } = useAuth();

const onSubmit = async () => {
	try {
		console.log(login);
		console.log(email.value);
		console.log(password.value);
		console.log(password.value);
		console.log(rememberMe.value);
		await login(email.value, password.value, rememberMe.value);
		error.value = '';
		this.$router.push('/');
	} catch (err) {
		error.value = 'Invalid login credentials';
	}
};
</script>

<style lang="scss" scoped src="./login-block.scss" />
