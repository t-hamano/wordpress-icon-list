import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import IconList from './components/icon-list.jsx';
import * as exports from '@wordpress/icons';

const version = import.meta.env.VITE_WORDPRESS_ICONS_VERSION;

const iconListComponent = Object.entries( exports );

const iconList = [];

for ( const i in iconListComponent ) {
	if ( 'Icon' === iconListComponent[ i ][ 0 ] ) {
		continue;
	}
	iconList.push( iconListComponent[ i ] );
}

const container = document.getElementById( 'root' );
const root = createRoot( container );

root.render(
	<>
		<h2>About</h2>
		<p>
			This is an application to list the icons available in the{ ' ' }
			<code>
				<a href="https://www.npmjs.com/package/@wordpress/icons" target="_blank" rel="noreferrer">
					@wordpress/icons
				</a>
			</code>{ ' ' }
			npm package. To copy icon name to the clipboard, just click on the icon.
		</p>
		<ul>
			{ undefined !== version && <li>Package version: { version }</li> }
			<li>Total number of icons: { iconList.length }</li>
		</ul>
		<h2>Usage</h2>
		<h3>Install the module</h3>
		<p>
			<code>npm install @wordpress/icons --save</code>
		</p>
		<h3>Use icon</h3>
		<pre>
			<code>
				{ "import { ( Icon, check ) } from '@wordpress/icons'" }
				<br />
				{ '<Icon icon={ check } />' }
			</code>
		</pre>
		<p className="github">
			<a href="https://github.com/t-hamano/wordpress-icon-list" target="_blank" rel="noreferrer">
				View on GitHub
			</a>
		</p>
		<hr />
		<IconList defaultIconList={ iconList } />
	</>
);
