import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Seguridad',
		description: 'Ofrecemos la mejor seguridad de datos a nuestros clientes, lo que nos diferencia',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Usos',
		description: 'Nuestro sistema es fácil de usar e integrar',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Mantenimiento',
		description: 'Nuestros códigos están escritos con los más altos estándares, lo que lo hace altamente sostenible.',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: '24/7 Soporte',
		description: 'Nuestro equipo está disponible en todo momento por si nos necesitas',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Precios',
		description: 'Ofrecemos la mayor relación valor/costo',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Scalas',
		description:
			'Nuestros servidores están ubicados en todo el mundo, lo que mejora la escalabilidad y la velocidad. ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
