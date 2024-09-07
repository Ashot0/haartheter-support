import Image1 from '../assets/images/ArticlesVideo/BestellingenUitvoerenInvoeren.png';
import Image2 from '../assets/images/ArticlesVideo/SalonSluiten.png';
import Image3 from '../assets/images/ArticlesVideo/Empioyees.png';
import Image4 from '../assets/images/ArticlesVideo/Hospitality.png';
import Image5 from '../assets/images/ArticlesVideo/Training.png';
import Image6 from '../assets/images/ArticlesVideo/SalonOpenen.png';
import Image7 from '../assets/images/ArticlesVideo/WebshopBestellingen.png';
import Image8 from '../assets/images/ArticlesVideo/VoorraadBeheer.png';
import Image9 from '../assets/images/ArticlesVideo/AfspraakInboeken.png';
import Image10 from '../assets/images/ArticlesVideo/PrijzenEnProductenOpzoeken.png';
import Image11 from '../assets/images/ArticlesVideo/Mail.png';
import Image12 from '../assets/images/ArticlesVideo/Services.png';
import Image13 from '../assets/images/ArticlesVideo/KlantAccountAanmakenBeheer.png';
import Image14 from '../assets/images/ArticlesVideo/RoostersEnUrenBeheer.png';
import Image15 from '../assets/images/ArticlesVideo/KassaVaardigheden.png';
import Image16 from '../assets/images/ArticlesVideo/Uitbetaling.png';
import Image17 from '../assets/images/ArticlesVideo/Personeelskorting.png';
import Image18 from '../assets/images/ArticlesVideo/Familiekorting.png';
import Image19 from '../assets/images/ArticlesVideo/Reiskostenvergoeding.png';
import Image20 from '../assets/images/ArticlesVideo/VrijVragen.png';
import Image21 from '../assets/images/ArticlesVideo/ContactICE.png';
import Image22 from '../assets/images/ArticlesVideo/DagSluit.png';
import Image23 from '../assets/images/ArticlesVideo/Klachten.png';
import Image24 from '../assets/images/ArticlesVideo/Gedrag.png';
import Image25 from '../assets/images/ArticlesVideo/Foodtruck.png';
import Image26 from '../assets/images/ArticlesVideo/DustAndDirty.png';
import Image27 from '../assets/images/ArticlesVideo/GedragTijdensBehandeling.png';
import ImageChild1 from '../assets/images/HomeInner/StartClose.png';
import ImageChild2 from '../assets/images/HomeInner/Orders.png';
import ImageChild3 from '../assets/images/HomeInner/Admin.png';
import ImageChild4 from '../assets/images/HomeInner/Communicatie.png';
import ImageChild5 from '../assets/images/HomeInner/Finance.png';
import ImageChild6 from '../assets/images/HomeInner/Contact.png';
import ImageChild7 from '../assets/images/HomeInner/StartClose2.png';
import ImageChild8 from '../assets/images/HomeInner/Redos.png';
import ImageChild9 from '../assets/images/HomeInner/Gedrag.png';
import ImageChild10 from '../assets/images/HomeInner/Uitstraling.png';
import ImageChild11 from '../assets/images/HomeInner/Verantwoordelijkheid.png';
import ImageChild12 from '../assets/images/HomeInner/StartClose.png';
import ImageChild13 from '../assets/images/HomeInner/Foodtruck.png';
import ImageChild14 from '../assets/images/HomeInner/DustAndDirty.png';
import ImageChild15 from '../assets/images/HomeInner/ServiceKlant.png';
import ImageChild16 from '../assets/images/HomeInner/TrainingAgenda.png';
import ImageChild17 from '../assets/images/HomeInner/TrainingAgenda.png';
import ImageChild18 from '../assets/images/HomeInner/ProductenInformatie.png';
import ImageChild19 from '../assets/images/HomeInner/ProductenSales.png';
export const pages = [
	{
		name: 'home',
		nameSmall: 'home',
		children: [
			{
				page: 'home-inner',
				name: 'Receptie',
				nameSmall: 'receptie',
				img: Image1,
				articles: 2,
				video: 2,
				children: [
					{
						page: 'articles-list',
						name: 'Start/close',
						nameSmall: 'start/close',
						img: ImageChild1,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'article',
								name: 'Salon openen',
								nameSmall: 'salon-openen',
								img: Image6,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'article',
								name: 'Salon sluiten',
								nameSmall: 'salon-sluiten',
								img: Image2,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'November 30, 2023',
							},
						],
						videos: [
							{
								page: 'video',
								name: 'Voorraad beheer',
								nameSmall: 'voorraad-beheer',
								img: Image8,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'video',
								name: 'Salon verbruik',
								nameSmall: 'salon-verbruik',
								img: Image6,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
					{
						page: 'articles-list',
						name: 'Orders',
						nameSmall: 'orders',
						img: ImageChild2,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [
							{
								page: 'video',
								name: 'Bestellingen uitvoeren/invoeren',
								nameSmall: 'bestellingen-uitvoeren/invoeren',
								img: Image1,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'video',
								name: 'Afspraak inboeken',
								nameSmall: 'afspraak-inboeken',
								img: Image9,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'video',
								name: 'Webshop bestellingen',
								nameSmall: 'webshop-bestellingen',
								img: Image7,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'video',
								name: 'Prijzen en producten opzoeken',
								nameSmall: 'prijzen-en-producten-opzoeken',
								img: Image10,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
					{
						page: 'articles-list',
						name: 'Admin',
						nameSmall: 'admin',
						img: ImageChild3,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'article',
								name: 'Mail',
								nameSmall: 'mail',
								img: Image11,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'November 30, 2023',
							},
							{
								page: 'article',
								name: 'Services',
								nameSmall: 'services',
								img: Image12,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'November 30, 2023',
							},
						],
						videos: [
							{
								page: 'video',
								name: 'Klant account aanmaken/beheer',
								nameSmall: 'klant-account-aanmaken/beheer',
								img: Image13,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'video',
								name: 'Roosters en uren beheer',
								nameSmall: 'roosters-en-uren-beheer',
								img: Image14,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
					{
						page: 'articles-list',
						name: 'Communicatie',
						nameSmall: 'communicatie',
						img: ImageChild4,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'article',
								name: 'Contact partners/brands',
								nameSmall: 'contact-partners/brands',
								img: Image7,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'November 30, 2023',
							},
						],
						videos: [
							{
								page: 'video',
								name: 'Kassa vaardigheden',
								nameSmall: 'kassa-vaardigheden',
								img: Image15,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
				],
			},
			{
				page: 'home-inner',
				name: 'Employees',
				nameSmall: 'employees',
				img: Image3,
				articles: 0,
				video: 4,
				children: [
					{
						page: 'articles-list',
						name: 'Finance',
						nameSmall: 'finance',
						img: ImageChild5,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'article',
								name: 'Uitbetaling',
								nameSmall: 'uitbetaling',
								img: Image16,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'article',
								name: 'Personeelskorting',
								nameSmall: 'personeelskorting',
								img: Image17,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'article',
								name: 'Familiekorting',
								nameSmall: 'familiekorting',
								img: Image18,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
						videos: [],
					},
					{
						page: 'articles-list',
						name: 'Admin',
						nameSmall: 'admin',
						img: ImageChild3,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [],
					},
					{
						page: 'articles-list',
						name: 'Contact',
						nameSmall: 'contact',
						img: ImageChild6,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'article',
								name: 'Reiskostenvergoeding',
								nameSmall: 'reiskostenvergoeding',
								img: Image19,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'article',
								name: 'Vrij vragen',
								nameSmall: 'vrij-vragen',
								img: Image20,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'article',
								name: 'Roosterwijziging',
								nameSmall: 'roosterwijziging',
								img: Image14,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'article',
								name: 'Contact ICE',
								nameSmall: 'contact-ice',
								img: Image21,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
						videos: [],
					},
				],
			},
			{
				page: 'home-inner',
				name: 'Managment',
				nameSmall: 'managment',
				img: Image6,
				articles: 2,
				video: 2,
				children: [
					{
						page: 'articles-list',
						name: 'Start/close',
						nameSmall: 'start/close',
						img: ImageChild7,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [
							{
								page: 'video',
								name: 'Dag start',
								nameSmall: 'dag-start',
								img: Image14,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'video',
								name: 'Dag sluit',
								nameSmall: 'dag-sluit',
								img: Image22,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
					{
						page: 'articles-list',
						name: 'Redo’s',
						nameSmall: 'redo’s',
						img: ImageChild8,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'article',
								name: 'Klachten',
								nameSmall: 'klachten',
								img: Image23,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
						videos: [],
					},
					{
						page: 'articles-list',
						name: 'Gedrag',
						nameSmall: 'gedrag',
						img: ImageChild9,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'article',
								name: 'Salon openen',
								nameSmall: 'salon-openen',
								img: Image24,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
						videos: [],
					},
				],
			},
			{
				page: 'home-inner',
				name: 'Houserules',
				nameSmall: 'houserules',
				img: Image2,
				articles: 1,
				video: 2,
				children: [
					{
						page: 'articles-list',
						name: 'Gedrag',
						nameSmall: 'gedrag',
						img: ImageChild9,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'article',
								name: 'Gedrag',
								nameSmall: 'gedrag',
								img: Image24,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
						videos: [],
					},
					{
						page: 'articles-list',
						name: 'Uitstraling',
						nameSmall: 'uitstraling',
						img: ImageChild10,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [],
					},
					{
						page: 'articles-list',
						name: 'Verantwoordelijkheid',
						nameSmall: 'verantwoordelijkheid',
						img: ImageChild11,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'article',
								name: 'Salon sluiten',
								nameSmall: 'salon-sluiten',
								img: Image23,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'November 30, 2023',
							},
						],
						videos: [],
					},
				],
			},
			{
				page: 'home-inner',
				name: 'Hospitality',
				nameSmall: 'hospitality',
				img: Image4,
				articles: 1,
				video: 2,
				children: [
					{
						page: 'articles-list',
						name: 'Foodtruck',
						nameSmall: 'foodtruck',
						img: ImageChild13,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [
							{
								page: 'video',
								name: 'Foodtruck',
								nameSmall: 'foodtruck',
								img: Image25,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
					{
						page: 'articles-list',
						name: 'Dust and dirty',
						nameSmall: 'dust-and-dirty',
						img: ImageChild14,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [
							{
								page: 'video',
								name: 'Dust and dirty',
								nameSmall: 'dust-and-dirty',
								img: Image26,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
					{
						page: 'articles-list',
						name: 'Service klant',
						nameSmall: 'service-klant',
						img: ImageChild15,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'article',
								name: 'Gedrag tijdens behandeling',
								nameSmall: 'gedrag-tijdens-behandeling',
								img: Image27,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
						videos: [],
					},
				],
			},
			{
				page: 'home-inner',
				name: 'Training',
				nameSmall: 'training',
				img: Image5,
				articles: 1,
				video: 2,
				children: [
					{
						page: 'articles-list',
						name: 'Verantwoordelijkheid',
						nameSmall: 'verantwoordelijkheid',
						img: ImageChild11,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'article',
								name: 'Verantwoordelijkheid',
								nameSmall: 'verantwoordelijkheid',
								img: Image23,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'November 30, 2023',
							},
						],
						videos: [],
					},
					{
						page: 'articles-list',
						name: 'Training agenda',
						nameSmall: 'training-agenda',
						img: ImageChild16,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [],
					},
					{
						page: 'articles-list',
						name: 'Training toegang',
						nameSmall: 'training-toegang',
						img: ImageChild17,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [],
					},
				],
			},
			{
				page: 'home-inner',
				name: 'Sales',
				nameSmall: 'sales',
				img: Image7,
				articles: 1,
				video: 2,
				children: [
					{
						page: 'articles-list',
						name: 'Producten sales',
						nameSmall: 'producten-sales',
						img: ImageChild18,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [
							{
								page: 'video',
								name: 'Producten',
								nameSmall: 'producten',
								img: Image7,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
					{
						page: 'articles-list',
						name: 'Producten sales',
						nameSmall: 'producten-sales',
						img: ImageChild19,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [
							{
								page: 'video',
								name: 'Producten',
								nameSmall: 'producten',
								img: Image7,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
				],
			},
		],
	},
];
