import { graphql } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';
import HomeContactUs from '@/components/HomeContactUs';
import HeroSection from '@/components/HeroSection';
import CommonServiceSection from '@/components/CommonServiceSection';

const PavojinguKroviniuPage = ({ data }) => {
	const {
		contactUs,
	} = data.reused.childMarkdownRemark.frontmatter;
	const {
		hero,
		infoSection,
		pageMetadata,
	} = data.content.childMarkdownRemark.frontmatter;

	return (
		<Layout pageMetadata={pageMetadata}>
			<div className="section">
				<HeroSection key={1} hero={hero} />
			</div>
			<div className="section fp-auto-height-responsive">
				<CommonServiceSection data={infoSection} />
			</div>
			<div className="section fp-auto-height-responsive">
				<HomeContactUs key={6} contactUs={contactUs} />
			</div>
		</Layout>
	);
};

export default PavojinguKroviniuPage;

export const PageQuery = graphql`
    query {
        reused: file(name: { eq: "home" }) {
            childMarkdownRemark {
                frontmatter {
                    pageMetadata {
                        title
                        description
                    }
                    contactUs {
                        title
                        description
                        background {
                            image {
                                publicURL
                            }
                            alt
                        }
                        info {
                            title
                            description
                            image {
                                image {
                                    publicURL
                                }
                                alt
                            }
                        }
                    }
                }
            }
        }
        content: file(relativePath: {eq: "pages/pavojingu-kroviniu-transportavimas.md" }) {
            childMarkdownRemark {
                frontmatter {
                    pageMetadata {
                        title
                        description
                    }
                    hero {
                        title
                        description
                        button {
                            title
                            to
                        }
                        image {
                            image {
                                publicURL
                            }
                            alt
                        }
                        background {
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 1980) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            alt
                        }
                    }
                    infoSection {
                        image {
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 1980) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            alt
                        }
                        background {
                            image {
                                publicURL
                            }
                            alt
                        }
                        description
                    }
                }
            }
        }
    }
`;
