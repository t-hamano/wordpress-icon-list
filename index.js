import IconInfo from './icon';

import * as exports from '@wordpress/icons';

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
