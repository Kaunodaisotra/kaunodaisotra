import React from 'react';
import './HomeHeroSection.scss';
import Button from '@/components/Button';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import GatsbyImage from 'gatsby-image';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import BackgroundOverlay from '@/components/BackgroundOverlay';

const HomeHeroSection = ({ hero }) => {
	if (typeof window === 'undefined') {
		return <p>Server Render</p>;
	}

	return (
		<section className="home-hero-section" key={1}>
			<BackgroundOverlay />
			<div className="home-hero-section__hero-text-container">
				<h1 className="home-hero-section__title">{hero.title}</h1>
				<p className="body home-hero-section__info">{hero.description}</p>
				<Button isAlwaysDesktopPadding title={hero.button.title} to={hero.button.to} />
			</div>
			<Splide options={{ arrow: false, autoplay: true, speed: 800 }}>
				{hero.backgrounds.map((background) => (
					<SplideSlide>
						<GatsbyImage className="home-hero-section__image" fluid={background.image.childImageSharp.fluid} />
					</SplideSlide>
				))}
			</Splide>
		</section>
	);
};

export default HomeHeroSection;
