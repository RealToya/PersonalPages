import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
		  pages: 'build',
		  assets: 'build',
		  fallback: null
		}),
		paths: {
		  base: process.env.NODE_ENV === 'dev' ? '/PersonalPages' : ''
		}
	  }
};

export default config;
