import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Read package.json to get version
const packageJson = JSON.parse( readFileSync( resolve( __dirname, 'package.json' ), 'utf-8' ) );

export default defineConfig( {
	plugins: [
		react()
	],
	resolve: {
		alias: {
			'react': resolve(__dirname, 'node_modules/react'),
			'react-dom': resolve(__dirname, 'node_modules/react-dom')
		}
	},
	base: './',
	build: {
		outDir: 'build',
	},
	server: {
		port: 3000,
		open: true,
	},
	define: {
		'import.meta.env.VITE_WORDPRESS_ICONS_VERSION': JSON.stringify(
			packageJson.devDependencies[ '@wordpress/icons' ]?.replace( '^', '' ) || 'unknown'
		),
	},
} );
