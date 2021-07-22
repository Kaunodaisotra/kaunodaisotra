import React from 'react';
import cx from 'classnames';
import './HeaderMobileBurger.scss';
import Link from '@/components/Link';
import { NAVIGATION_LINKS } from '@/components/Header';
import backgroundImage from '../../static/img/home-transportation.png';

const HeaderMobileBurger = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	return (
		<>
			<a
				onClick={() => {
					setMobileMenuOpen((prev) => !prev);
					console.log('hello');
				}}
				className={cx({
					menuButton: true,
					'menuButton--active': isMobileMenuOpen,
				})}
			>
				<span className="lines" />
			</a>
			<nav className={cx({
				mainMenu: true,
				'mainMenu--active': isMobileMenuOpen,
				'text-center': true,
			})}
			>
				<div className="mainMenu__background" />
				<img src={backgroundImage} alt="Background" className="mainMenu__image" />
				<h2 className="mainMenu__title">Naviguok greičiau</h2>
				<ul>
					{NAVIGATION_LINKS.map((link) => (
						<li
							key={link.title}
							className="mainMenu__link"
							onClick={() => setMobileMenuOpen(false)}
						>
							<Link title={link.title} href={link.to} />
						</li>
					))}
				</ul>
				<p className="body-small menuButton__copyright">
					2017 © UAB Kauno Daisotra.
					Visos teisės saugomos.
				</p>
			</nav>
		</>
	);
};

export default HeaderMobileBurger;
