import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
	},
];

export const footerData = [
	{
		title: 'Principal',
		links: ['Mi Blog', 'Soporte', 'Sobre Nosotros'],
	},
	{
		title: 'Productos',
		links: ['Login', 'Personal', 'Negocios', 'Nuestro Equipo'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Eventos', 'Stories', 'Office'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terminoss de Servicios', 'Responsabilidad'],
	},
];
