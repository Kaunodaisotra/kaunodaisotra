import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, withPrefix } from 'gatsby';
import '@/components/Layout.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactFullpage from '@fullpage/react-fullpage';
import FullPageLoader from '@/components/FullPageLoader';

console.error = () => {
};

const Layout = ({
	children,
	pageMetadata,
}) => {
	if (typeof window === 'undefined') {
		return <p>Server Render</p>;
	}

	const {
		title,
		description,
	} = pageMetadata;
	const [isLoadingPage, setIsLoadingPage] = React.useState(true);
	const isEnglishLanguage = window && window.location.pathname.split('/')[1] && window.location.pathname.split('/')[1] === 'en';
	const sideNavTitles = isEnglishLanguage
		? ['Home', 'About us', 'Services', 'Transportation', 'Whu us?', 'Contacts']
		: ['Pradžia', 'Apie mus', 'Paslaugos', 'Transportavimas', 'Kodėl mes?', 'Kontaktai'];

	React.useEffect(() => {
		// Update the document title using the browser API
		setTimeout(() => {
			setIsLoadingPage(false);
		}, 2000);
	});

	return (
		<div className="all-background">
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="icon" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
				<link rel="icon" href={`${withPrefix('/')}img/favicon-57x57.png`} sizes="57x57" />
				<link rel="icon" href={`${withPrefix('/')}img/favicon-76x76.png`} sizes="76x76" />
				<link rel="icon" href={`${withPrefix('/')}img/favicon-96x96.png`} sizes="96x96" />
				<link rel="icon" href={`${withPrefix('/')}img/favicon-128x128.png`} sizes="128x128" />
				<link rel="icon" href={`${withPrefix('/')}img/favicon-192x192.png`} sizes="192x192" />
				<link rel="icon" hhref={`${withPrefix('/')}img/favicon-228x228.png`} sizes="228x228" />

				<link rel="shortcut icon" href={`${withPrefix('/')}img/favicon-196x196.png`} sizes="196x196" />
				<link rel="apple-touch-icon" href={`${withPrefix('/')}img/favicon-120x120.png`} sizes="120x120" />
				<link rel="apple-touch-icon" href={`${withPrefix('/')}img/favicon-152x152.png`} sizes="152x152" />
				<link rel="apple-touch-icon" href={`${withPrefix('/')}img/favicon-180x180.png`} sizes="180x180" />

				<link
					rel="mask-icon"
					href={`${withPrefix('/')}img/logo.svg`}
					color="#ff4400"
				/>
				<meta name="theme-color" content="#fff" />

				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />
				<meta
					property="og:image"
					content={`${withPrefix('/')}img/home-header.png`}
				/>
			</Helmet>

			<FullPageLoader isLoadingPage={isLoadingPage} />

			<ReactFullpage
				navigation
				anchors={['pradzia', 'apie-mus', 'paslaugos', 'transportavimas', 'kodel-mes', 'kontaktai']}
				navigationTooltips={sideNavTitles}
				fixedElements="#header"
				navigationPosition="left"
				responsiveWidth={1024}
				render={() => (
					<>
						<Header />
						<ReactFullpage.Wrapper>
							{children}
							<div className="section fp-auto-height" style={{ top: '-3px' }}>
								<Footer />
							</div>
						</ReactFullpage.Wrapper>
					</>
				)}
			/>
		</div>
	);
};

export const query = graphql`
    fragment pageMetadata on SitePage {
        pageMetadata {
            title
            siteDescription
        }
    }
`;

export default Layout;
