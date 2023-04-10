export const data = [
	{
		title: 'Que hacer para desarrolar Software',
		description:
			'Nuestros clientes felizmente se quedan con nuestros servicios por más años. Ver opiniones reales de nuestros clientes.',
		image: './assets/clients.jpg',
	},
	{
		title: 'Sguridad ',
		description: 'Obtenga más información sobre nuestros sistemas de seguridad para asegurarse de que sus datos estén siempre seguros',
		image: './assets/security.jpg',
	},
	{
		title: 'Nuestro equipo',
		description: 'Nuestro equipo está formado por los mejores expertos de la industria, infórmate sobre ellos',
		image: './assets/teamwork.jpg',
	},
	{
		title: 'Servicios',
		description: 'Obtenga más información sobre el hardware y el software utilizados para su servicio',
		image: './assets/security.jpg',
	},
	{
		title: 'Nuestros clientes',
		description: 'Hemos brindado servicios a los mejores clientes en la industria tecnológica.',
		image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
