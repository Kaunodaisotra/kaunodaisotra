import { graphql } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';
import HomeHeroSection from '@/components/HomeHeroSection';
import HomeAboutUsSection from '@/components/HomeAboutUsSection';
import HomeServicesSection from '@/components/HomeServicesSection';
import HomeTransportationSection from '@/components/HomeTransportationSection';
import HomeWhyUs from '@/components/HomeWhyUs';
import HomeContactUs from '@/components/HomeContactUs';

const IndexPage = ({ data }) => {
	const {
		hero,
		aboutUs,
		pageMetadata,
		services,
		transportation,
		whyUs,
		contactUs,
	} = data.content.childMarkdownRemark.frontmatter;

	return (
		<Layout pageMetadata={pageMetadata}>
			<div className="section">
				<HomeHeroSection key={1} hero={hero} />
			</div>
			<div className="section fp-auto-height-responsive">
				<HomeAboutUsSection key={2} aboutUs={aboutUs} />
			</div>
			<div className="section fp-auto-height-responsive">
				<HomeServicesSection key={3} services={services} />
			</div>
			<div className="section fp-auto-height-responsive">
				<HomeTransportationSection key={4} transportation={transportation} />
			</div>
			<div className="section fp-auto-height-responsive">
				<HomeWhyUs key={5} whyUs={whyUs} />
			</div>
			<div className="section fp-auto-height-responsive">
				<HomeContactUs key={6} contactUs={contactUs} />
			</div>
		</Layout>
	);
};

export default IndexPage;

export const PageQuery = graphql`
    query IndexPage {
        content: file(relativePath: {eq: "pages/home.md" }) {
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
                        backgrounds {
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 1980, quality: 70) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            alt
                        }
                    }
                    aboutUs {
                        title
                        subtitle
                        description
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
                        info {
                            title
                            image {
                                image {
                                    publicURL
                                }
                                alt
                            }
                        }
                    }
                    services {
                        title
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
                        services {
                            title
                            image {
                                image {
                                    publicURL
                                }
                                alt
                            }
                            button {
                                title
                                to
                            }
                        }
                        subsection {
                            title
                            description
                            background {
                                image {
                                    publicURL
                                }
                                alt
                            }
                            button {
                                title
                                to
                            }
                        }
                    }
                    transportation {
                        title
                        description
                        button {
                            title
                            to
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
                    whyUs {
                        title
                        description
                        background {
                            image {
                                publicURL
                            }
                            alt
                        }
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
    }
`;
