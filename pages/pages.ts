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
		children: [
			{
				page: 'HomeInner',
				name: 'Receptie',
				img: Image1,
				articles: 2,
				video: 2,
				children: [
					{
						page: 'ArticlesVideo',
						name: 'Start/Close',
						img: ImageChild1,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'Article',
								name: 'Salon openen',
								img: Image6,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'Article',
								name: 'Salon sluiten',
								img: Image2,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'November 30, 2023',
							},
						],
						videos: [
							{
								page: 'Video',
								name: 'Voorraad beheer',
								img: Image8,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'Video',
								name: 'Salon verbruik',
								img: Image6,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},

					{
						page: 'ArticlesVideo',
						name: 'Orders',
						img: ImageChild2,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [
							{
								page: 'Video',
								name: 'Bestellingen uitvoeren/invoeren',
								img: Image1,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'Video',
								name: 'Afspraak inboeken',
								img: Image9,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'Video',
								name: 'Webshop bestellingen',
								img: Image7,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'Video',
								name: 'Prijzen en producten opzoeken',
								img: Image10,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},

					{
						page: 'ArticlesVideo',
						name: 'Admin',
						img: ImageChild3,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'Article',
								name: 'Mail',
								img: Image11,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'November 30, 2023',
							},
							{
								page: 'Article',
								name: 'Services',
								img: Image12,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'November 30, 2023',
							},
						],
						videos: [
							{
								page: 'Video',
								name: 'Klant account aanmaken/beheer',
								img: Image13,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'Video',
								name: 'Roosters en uren beheer',
								img: Image14,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},

					{
						page: 'ArticlesVideo',
						name: 'Communicatie',
						img: ImageChild4,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'Article',
								name: 'Contact partners/brands',
								img: Image7,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'November 30, 2023',
							},
						],
						videos: [
							{
								page: 'Video',
								name: 'Kassa vaardigheden',
								img: Image15,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
				],
			},
			{
				page: 'HomeInner',
				name: 'Employees',
				img: Image3,
				articles: 0,
				video: 4,
				children: [
					{
						page: 'ArticlesVideo',
						name: 'Finance',
						img: ImageChild5,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'Article',
								name: 'Uitbetaling',
								img: Image16,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'Article',
								name: 'Personeelskorting',
								img: Image17,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'Article',
								name: 'Familiekorting',
								img: Image18,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
						videos: [],
					},

					{
						page: 'ArticlesVideo',
						name: 'Admin',
						img: ImageChild3,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [],
					},

					{
						page: 'ArticlesVideo',
						name: 'Contact',
						img: ImageChild6,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'Article',
								name: 'Reiskostenvergoeding',
								img: Image19,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'Article',
								name: 'Vrij vragen',
								img: Image20,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'Article',
								name: 'Roosterwijziging',
								img: Image14,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'Article',
								name: 'Contact ICE',
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
				page: 'HomeInner',
				name: 'Managment',
				img: Image6,
				articles: 2,
				video: 2,
				children: [
					{
						page: 'ArticlesVideo',
						name: 'Start/Close',
						img: ImageChild7,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [
							{
								page: 'Video',
								name: 'Dag start',
								img: Image14,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
							{
								page: 'Video',
								name: 'Dag sluit',
								img: Image22,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},

					{
						page: 'ArticlesVideo',
						name: 'Redo’s',
						img: ImageChild8,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'Article',
								name: 'Klachten',
								img: Image23,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
						videos: [],
					},

					{
						page: 'ArticlesVideo',
						name: 'Gedrag',
						img: ImageChild9,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'Article',
								name: 'Salon openen',
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
				page: 'HomeInner',
				name: 'Houserules',
				img: Image2,
				articles: 1,
				video: 2,
				children: [
					{
						page: 'ArticlesVideo',
						name: 'Gedrag',
						img: ImageChild9,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'Article',
								name: 'Gedrag',
								img: Image24,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
						videos: [],
					},
					{
						page: 'ArticlesVideo',
						name: 'Uitstraling',
						img: ImageChild10,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [],
					},
					{
						page: 'ArticlesVideo',
						name: 'Verantwoordelijkheid',
						img: ImageChild11,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'Article',
								name: 'Salon sluiten',
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
				page: 'HomeInner',
				name: 'Hospitality',
				img: Image4,
				articles: 1,
				video: 2,
				children: [
					{
						page: 'ArticlesVideo',
						name: 'Foodtruck',
						img: ImageChild13,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [
							{
								page: 'Video',
								name: 'Foodtruck',
								img: Image25,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
					{
						page: 'ArticlesVideo',
						name: 'Dust and dirty',
						img: ImageChild14,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [
							{
								page: 'Video',
								name: 'Dust and dirty',
								img: Image26,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
					{
						page: 'ArticlesVideo',
						name: 'Service klant',
						img: ImageChild15,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'Article',
								name: 'Gedrag tijdens behandeling',
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
				page: 'HomeInner',
				name: 'Training',
				img: Image5,
				articles: 1,
				video: 2,
				children: [
					{
						page: 'ArticlesVideo',
						name: 'Verantwoordelijkheid',
						img: ImageChild11,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [
							{
								page: 'Article',
								name: 'Verantwoordelijkheid',
								img: Image23,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'November 30, 2023',
							},
						],
						videos: [],
					},
					{
						page: 'ArticlesVideo',
						name: 'Training agenda',
						img: ImageChild16,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [],
					},
					{
						page: 'ArticlesVideo',
						name: 'Training toegang',
						img: ImageChild17,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [],
					},
				],
			},
			{
				page: 'HomeInner',
				name: 'Sales',
				img: Image7,
				articles: 1,
				video: 2,
				children: [
					{
						page: 'ArticlesVideo',
						name: 'Producten sales',
						img: ImageChild18,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [
							{
								page: 'Video',
								name: 'Producten',
								img: Image7,
								des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor sed do eiusmod...',
								date: 'October 23, 2023',
							},
						],
					},
					{
						page: 'ArticlesVideo',
						name: 'Producten sales',
						img: ImageChild19,
						des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
						articles: [],
						videos: [
							{
								page: 'Video',
								name: 'Producten',
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
