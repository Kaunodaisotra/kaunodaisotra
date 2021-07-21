import React from 'react';
import Link from '@/components/Link';
import Logo from '@/components/Logo';
import cx from 'classnames';
import './Header.scss';
import HeaderMobileBurger from '@/components/HeaderMobileBurger';

export const NAVIGATION_LINKS = [
	{ to: '#pradzia', title: 'Pradzia' },
	{ to: '#apie-mus', title: 'Apie mus' },
	{ to: '#paslaugos', title: 'Paslaugos' },
	{ to: '#transportavimas', title: 'Transportavimas' },
	{ to: '#kodel-mes', title: 'Kodel mes' },
	{ to: '#kontaktai', title: 'Kontaktai' },
];

export const NAVIGATION_LINKS_EN = [
	{ to: '#pradzia', title: 'Home' },
	{ to: '#apie-mus', title: 'About us' },
	{ to: '#paslaugos', title: 'Services' },
	{ to: '#transportavimas', title: 'Transportation' },
	{ to: '#kodel-mes', title: 'Why us?' },
	{ to: '#kontaktai', title: 'Contacts' },
];

export const NAVIGATION_LINKS_OUTSIDE_HOMEPAGE = [
	{ to: '/', title: 'Pradzia' },
	{ to: '/#apie-mus', title: 'Apie mus' },
	{ to: '/#paslaugos', title: 'Paslaugos' },
	{ to: '/#transportavimas', title: 'Transportavimas' },
	{ to: '/#kodel-mes', title: 'Kodel mes' },
	{ to: '/#kontaktai', title: 'Kontaktai' },
];

export const NAVIGATION_LINKS_OUTSIDE_HOMEPAGE_EN = [
	{ to: '/en', title: 'Home' },
	{ to: '/en/#apie-mus', title: 'About us' },
	{ to: '/en/#paslaugos', title: 'Services' },
	{ to: '/en/#transportavimas', title: 'Transportation' },
	{ to: '/en/#kodel-mes', title: 'Why us?' },
	{ to: '/en/#kontaktai', title: 'Contacts' },
];

const Header = () => {
	if (typeof window === 'undefined') {
		return <p>Server Render</p>;
	}

	const isEnglishLanguage = window && window.location.pathname.split('/')[1] && window.location.pathname.split('/')[1] === 'en';
	const isInHomepage = window.location.pathname === '/' || window.location.pathname === '/en';

	// eslint-disable-next-line no-nested-ternary
	const navLinks = () => {
		if (isInHomepage && isEnglishLanguage) {
			return NAVIGATION_LINKS_EN;
		} if (isInHomepage && !isEnglishLanguage) {
			return NAVIGATION_LINKS;
		} if (!isInHomepage && isEnglishLanguage) {
			return NAVIGATION_LINKS_OUTSIDE_HOMEPAGE_EN;
		}
		return NAVIGATION_LINKS_OUTSIDE_HOMEPAGE;
	};

	return (
		<header className="header" id="header">
			<Logo />
			<nav className="header__nav-container">
				<ol className="header__links">
					{navLinks().map((link) => (
						<li key={link.title}>
							<Link title={link.title} href={link.to} />
						</li>
					))}
				</ol>
			</nav>
			<div className="header__language-selector">
				<Link
					className="mr-24"
					isActive={!isEnglishLanguage}
					title="LT"
					href="/"
				/>
				<Link
					title="EN"
					href="/en"
					isActive={isEnglishLanguage}
					className={cx({
						'header__language-selector--active': isEnglishLanguage,
					})}
				/>
			</div>
			<HeaderMobileBurger />
		</header>
	);
};
export default Header;
