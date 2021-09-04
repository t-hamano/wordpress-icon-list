import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
	<React.StrictMode>
		{ undefined !== version && (
			<small>( Latest Version: { version } )</small>
		) }
		<IconList defaultIconList={ iconList } />
	</React.StrictMode>,
	document.getElementById( 'root' )
);
