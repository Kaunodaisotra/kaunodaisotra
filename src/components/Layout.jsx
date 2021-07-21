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
	const {
		title,
		description,
	} = pageMetadata;
	const [isLoadingPage, setIsLoadingPage] = React.useState(true);

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

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={`${withPrefix('/')}img/logo.svg`}
				/>

				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix('/')}img/favicon-32x32.ico`}
					sizes="32x32"
				/>

				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix('/')}img/favicon.ico`}
					sizes="16x16"
				/>

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
				navigationTooltips={['Pradžia', 'Apie mus', 'Paslaugos', 'Transportavimas', 'Kodėl mes?', 'Kontaktai']}
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
