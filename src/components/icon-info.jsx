import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { Icon } from '@wordpress/icons';
import { CopyToClipboard } from './copy-to-clipboard.jsx';

export default function IconInfo( { icon } ) {
	const [ openTip, setOpenTip ] = useState( false );

	return (
		<CopyToClipboard
			text={ icon[ 0 ] }
			onCopy={ () => {
				setOpenTip( true );
				setTimeout( () => setOpenTip( false ), 1000 );
			} }
		>
			<Tooltip arrow open={ openTip } disableHoverListener placement="top" title={ 'Copied!!' }>
				<button type="button" onMouseLeave={ () => setOpenTip( false ) }>
					<Icon icon={ icon[ 1 ] } />
					<span>{ icon[ 0 ] }</span>
				</button>
			</Tooltip>
		</CopyToClipboard>
	);
}
