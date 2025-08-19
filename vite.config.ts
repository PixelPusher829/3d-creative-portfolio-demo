import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	ssr: {
		noExternal: ['three']
	},
	plugins: [tailwindcss(), sveltekit()],
	server: {
		fs: {
			allow: ['./slicemachine.config.json']
		}
	}
});
