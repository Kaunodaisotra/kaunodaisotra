import button from '../partials/button';
import { background } from '../partials/background';
import { image } from '../partials/image';
import { seo } from '../partials/seo';

const page = {
	file: 'content/pages/home-en.md',
	label: 'Home english',
	name: 'home-en',
	fields: [
		{
			label: 'Hero section',
			name: 'hero',
			widget: 'object',
			collapsed: true,
			fields: [
				{ label: 'Title', name: 'title', widget: 'string' },
				{ label: 'Description', name: 'description', widget: 'string' },
				button,
				{
					label: 'Background images',
					name: 'backgrounds',
					widget: 'list',
					fields: [image()],
				},
			],
		},
		{
			label: 'About us section',
			name: 'aboutUs',
			widget: 'object',
			collapsed: true,
			fields: [
				{ label: 'Title', name: 'title', widget: 'string' },
				{ label: 'Subtitle', name: 'subtitle', widget: 'string' },
				{
					label: 'Description', name: 'description', widget: 'markdown', modes: ['rich_text'],
				},
				image(),
				background(),
				{
					label: 'Information',
					name: 'info',
					widget: 'list',
					fields: [{ label: 'Title', name: 'title', widget: 'string' }, image()],
				},
			],
		},
		{
			label: 'Services section',
			name: 'services',
			widget: 'object',
			collapsed: true,
			fields: [
				{ label: 'Title', name: 'title', widget: 'string' },
				background(),
				{
					label: 'Services',
					name: 'services',
					widget: 'list',
					fields: [{ label: 'Title', name: 'title', widget: 'string' }, image(), button],
				},
				{
					label: 'Subsection',
					name: 'subsection',
					widget: 'object',
					collapsed: true,
					fields: [{ label: 'Title', name: 'title', widget: 'string' }, { label: 'Description', name: 'description', widget: 'string' }, background(), button],
				},
			],
		},
		{
			label: 'Transportation section',
			name: 'transportation',
			widget: 'object',
			collapsed: true,
			fields: [
				{ label: 'Title', name: 'title', widget: 'string' },
				{ label: 'Description', name: 'description', widget: 'string' },
				button,
				background(),
			],
		},

		{
			label: 'Why us section',
			name: 'whyUs',
			widget: 'object',
			collapsed: true,
			fields: [
				{ label: 'Title', name: 'title', widget: 'string' },
				{
					label: 'Description',
					name: 'description',
					widget: 'markdown',
					modes: ['rich_text'],
				},
				image(),
				background(),
				{
					label: 'Info',
					name: 'info',
					widget: 'list',
					fields: [
						{ label: 'Title', name: 'title', widget: 'string' },
						image(),
						{
							label: 'Description',
							name: 'description',
							widget: 'markdown',
							modes: ['rich_text'],
						},
					],
				},
			],
		},
		{
			label: 'Contact us section',
			name: 'contactUs',
			widget: 'object',
			collapsed: true,
			fields: [
				{ label: 'Title', name: 'title', widget: 'string' },
				{ label: 'Description', name: 'description', widget: 'string' },
				background(),
				{
					label: 'Info',
					name: 'info',
					widget: 'list',
					collapsed: true,
					fields: [{ label: 'Title', name: 'title', widget: 'string' }, { label: 'Description', name: 'description', widget: 'string' }, image()],
				},
			],
		},
		seo,
	],
};

export default page;
