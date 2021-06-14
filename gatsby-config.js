module.exports = {
	siteMetadata: {
		title: 'Gatsby + Netlify CMS Starter',
		description:
      'This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
	},
	plugins: [
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads',
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static',
						},
					},
				],
			},
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				data: `@import "${__dirname}/src/assets/scss/abstracts";`,
			},
		},
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/content`,
				name: 'content',
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				manualInit: true,
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		{
			resolve: 'gatsby-plugin-google-fonts-v2',
			options: {
				fonts: [
					{
						family: 'Rubik',
						weights: ['400', '700'],
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-scroll-reveal',
			options: {
				once: false,
			},
		}, {
			resolve: 'gatsby-plugin-i18n',
			options: {
				langKeyDefault: 'lt',
				useLangKeyLayout: false,
			},
		},
		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
};
