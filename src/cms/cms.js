import CMS from 'netlify-cms-app';
import pages from './pages';

window.CMS_MANUAL_INIT = true;

CMS.init({
	config: {
		load_config_file: false,
		backend: {
			name: 'git-gateway',
			repo: 'Kaunodaisotra/kaunodaisotra',
			branch: 'main',
		},
		media_folder: 'static/img',
		public_folder: 'static/img',
		collections: [pages],
	},
});
