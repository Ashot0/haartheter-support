<template>
	<footer class="footer">
		<div class="footer__wrapper">
			<div class="footer__left">
				<img
					class="footer__title_img"
					src="@/assets/images/Global/logo.png"
					alt=""
				/>
				<p class="footer__left-text">
					Sign up for our newsletter and get the latest updates, news and
					product offers via email
				</p>
				<div class="footer__social-media">
					<img
						class="footer__social-media-element"
						src="../../assets/images/icons/facebook.png"
						alt=""
						srcset=""
					/>
					<img
						class="footer__social-media-element"
						src="../../assets/images/icons/instagram.png"
						alt=""
						srcset=""
					/>
					<img
						class="footer__social-media-element"
						src="../../assets/images/icons/twitter.png"
						alt=""
						srcset=""
					/>
					<img
						class="footer__social-media-element"
						src="../../assets/images/icons/email.png"
						alt=""
						srcset=""
					/>
				</div>
			</div>
			<div class="footer__right">
				<div class="footer__links-block">
					<div @click="goToPage(pages[0].children[0])" class="footer__title_h3">
						Receptie
					</div>
					<div
						@click="goToPage(pages[0].children[0].children[0])"
						class="footer__link"
					>
						Start/Close
					</div>
					<div
						@click="goToPage(pages[0].children[0].children[1])"
						class="footer__link"
					>
						Orders
					</div>
					<div
						@click="goToPage(pages[0].children[0].children[2])"
						class="footer__link"
					>
						Admin
					</div>
					<div
						@click="goToPage(pages[0].children[0].children[3])"
						class="footer__link"
					>
						Communicatie
					</div>
				</div>

				<div class="footer__links-block">
					<div @click="goToPage(pages[0].children[1])" class="footer__title_h3">
						Employees
					</div>
					<div
						@click="goToPage(pages[0].children[1].children[0])"
						class="footer__link"
					>
						Finance
					</div>
					<div
						@click="goToPage(pages[0].children[1].children[1])"
						class="footer__link"
					>
						Admin
					</div>
					<div
						@click="goToPage(pages[0].children[1].children[2])"
						class="footer__link"
					>
						Contact
					</div>
				</div>
				<div class="footer__links-block">
					<div @click="goToPage(pages[0].children[2])" class="footer__title_h3">
						Managment
					</div>
					<div
						@click="goToPage(pages[0].children[2].children[0])"
						class="footer__link"
					>
						Start/Close
					</div>
					<div
						@click="goToPage(pages[0].children[2].children[1])"
						class="footer__link"
					>
						Redo’s
					</div>
					<div
						@click="goToPage(pages[0].children[2].children[2])"
						class="footer__link"
					>
						Gedrag
					</div>
				</div>
				<div class="footer__links-block">
					<div @click="goToPage(pages[0].children[3])" class="footer__title_h3">
						Houserules
					</div>
					<div
						@click="goToPage(pages[0].children[3].children[0])"
						class="footer__link"
					>
						Gedrag
					</div>
					<div
						@click="goToPage(pages[0].children[3].children[1])"
						class="footer__link"
					>
						Uitstraling
					</div>
					<div
						@click="goToPage(pages[0].children[3].children[2])"
						class="footer__link"
					>
						Verantwoordelijkheid
					</div>
				</div>
				<div class="footer__links-block">
					<div @click="goToPage(pages[0].children[4])" class="footer__title_h3">
						hospitality
					</div>
					<div
						@click="goToPage(pages[0].children[4].children[0])"
						class="footer__link"
					>
						Foodtruck
					</div>
					<div
						@click="goToPage(pages[0].children[4].children[1])"
						class="footer__link"
					>
						Dust and dirty
					</div>
					<div
						@click="goToPage(pages[0].children[4].children[2])"
						class="footer__link"
					>
						Service klant
					</div>
				</div>
				<div class="footer__links-block">
					<div @click="goToPage(pages[0].children[5])" class="footer__title_h3">
						Training
					</div>
					<div
						@click="goToPage(pages[0].children[5].children[0])"
						class="footer__link"
					>
						Verantwoordelijkheid
					</div>
					<div
						@click="goToPage(pages[0].children[5].children[1])"
						class="footer__link"
					>
						Training agenda
					</div>
					<div
						@click="goToPage(pages[0].children[5].children[2])"
						class="footer__link"
					>
						Training toegang
					</div>
				</div>
				<div class="footer__links-block">
					<div @click="goToPage(pages[0].children[6])" class="footer__title_h3">
						Sales
					</div>
					<div
						@click="goToPage(pages[0].children[6].children[0])"
						class="footer__link"
					>
						Producten informatie
					</div>
					<div
						@click="goToPage(pages[0].children[6].children[1])"
						class="footer__link"
					>
						Producten sales
					</div>
				</div>
			</div>
		</div>
		<div class="footer__copyright">
			<p>© Copyright 2023 Het Haartheater Amsterdam</p>
			<div class="footer__cards">
				<img src="@/assets/images/icons/payment/1.png" alt="" />
				<img src="@/assets/images/icons/payment/2.png" alt="" />
				<img src="@/assets/images/icons/payment/3.png" alt="" />
				<img src="@/assets/images/icons/payment/4.png" alt="" />
				<img src="@/assets/images/icons/payment/5.png" alt="" />
			</div>
		</div>
	</footer>
</template>

<script>
import { pages } from '@/pages/pages.ts';
import { useRouter } from 'vue-router';
import { ref, watch, onMounted } from 'vue';
export default {
	setup() {
		const route = ref(null);
		const router = useRouter();
		const goToPage = (page) => {
			if ('home-inner' === page.page) {
				localStorage.setItem('pageObject', JSON.stringify(page));
				router.replace({
					path: `/home-inner`,
					query: { page: `${page.nameSmall}` },
				});
			} else {
				localStorage.setItem('homeInnerObject', JSON.stringify(page));
				router.replace({
					path: `/articles-list`,
					query: { list: `${page.nameSmall}` },
				});
			}
			if (route.value.name == page.page) {
				setTimeout(() => {
					router.go(0);
				}, 100);
			}
		};

		watch(router.currentRoute, (newRoute) => {
			route.value = newRoute;
		});
		onMounted(() => {
			route.value = router.currentRoute.value;
		});
		return { goToPage, pages, route };
	},
};
</script>

<style lang="scss" scoped src="./footer.scss" />
