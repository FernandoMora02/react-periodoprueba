import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Bienvenidos! Empresa desarrolladora cde software</MainHeading>
				<HeroText>
					Registrate en nuestra empresa para obtener mas informacion
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>LogIn</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
