import { Children, cloneElement } from 'react';
import copy from 'copy-to-clipboard';

// This is the functional component version of the react-copy-to-clipboard library.
// See: https://github.com/nkbt/react-copy-to-clipboard
export function CopyToClipboard( { text, children, onCopy, options, ...props } ) {
	const onClick = ( event ) => {
		const elem = Children.only( children );
		const result = copy( text, options );

		if ( onCopy ) {
			onCopy( text, result );
		}

		// Bypass onClick if it was present
		if ( elem && elem.props && typeof elem.props.onClick === 'function' ) {
			elem.props.onClick( event );
		}
	};

	const elem = Children.only( children );
	return cloneElement( elem, { ...props, onClick } );
}
