import React from 'react';
import ReactDOM from 'react-dom';
import IconInfo from './icon';
import './index.css';

import * as exports from '@wordpress/icons';

const p = require( '../package.json' );
const version = p?.devDependencies?.['@wordpress/icons'].replace( '^', '' );

const iconListComponent = Object.entries( exports );

let iconList = [];

for ( let i in iconListComponent ) {
	if ( 'Icon' === iconListComponent[i][0]) {
		continue;
	}
	iconList.push( iconListComponent[i]);
}

ReactDOM.render(
	<React.StrictMode>
		{ undefined !== version && (
			<small>( Version: { version } )</small>
		)}
		<ul className={ 'iconlist' }>
			{
				iconList.map( ( icon, index ) => {
					return <IconInfo key={ index } icon={ icon } />;
				})
			}
		</ul>
	</React.StrictMode>,
	document.getElementById( 'root' )
);
