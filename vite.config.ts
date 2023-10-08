import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	css: {
		modules: {
			generateScopedName: '[name]__[local]_[hash:base64:5]',
		},
	},
});
