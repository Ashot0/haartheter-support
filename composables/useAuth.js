import { useState } from '#app';
import { computed } from 'vue';

export function useAuth() {
	const token = useState('token', () => null);
	const user = useState('user', () => null);
	const rememberMe = useState('rememberMe', () => false);

	const login = async (email, password, rememberMeOption) => {
		try {
			const response = await $fetch(
				// 'http://dev-backend-het-haartheater.x-tribal.com:80/api/login'
				'#',
				{
					method: 'POST',
					body: { value: email, password, loginType: 'EMAIL' },
				}
			);

			console.log(response.token);
			console.log(response.user);

			token.value = response.token;
			user.value = response.user;
			rememberMe.value = rememberMeOption;

			if (rememberMeOption) {
				localStorage.setItem('token', response.token);
			} else {
				sessionStorage.setItem('token', response.token);
			}
		} catch (error) {
			console.error('Login failed:', error);
			throw new Error('Invalid credentials');
		}
	};

	const logout = () => {
		token.value = null;
		user.value = null;
		localStorage.removeItem('token');
		sessionStorage.removeItem('token');
	};

	const checkAuth = async () => {
		let savedToken = localStorage.getItem('token');
		if (!savedToken) {
			savedToken = sessionStorage.getItem('token');
		}

		if (savedToken) {
			try {
				const response = await $fetch('/api/user', {
					headers: { Authorization: `Bearer ${savedToken}` },
				});
				token.value = savedToken;
				user.value = response.user;
			} catch (error) {
				console.error('Token validation failed:', error);
				logout();
			}
		}
	};

	return {
		token,
		user,
		rememberMe,
		login,
		logout,
		checkAuth,
		isAuthenticated: computed(() => !!token.value),
	};
}
