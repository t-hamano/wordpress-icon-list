import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import IconList from './components/icon-list.jsx';
import * as exports from '@wordpress/icons';

const p = require( '../package.json' );
const version = p?.devDependencies?.[ '@wordpress/icons' ].replace( '^', '' );

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
		{ undefined !== version && <small>( Latest Version: { version } )</small> }
		<IconList defaultIconList={ iconList } />
	</>
);
