import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { isMobile } from 'react-device-detect';
import Tooltip from '@material-ui/core/Tooltip';
import { Icon } from '@wordpress/icons';

const newIcons = [
	'justifyLeft',
	'justifyCenter',
	'justifyRight',
	'justifySpaceBetween',
	'lock',
	'queryPagination',
	'queryPaginationNext',
	'queryPaginationNumbers',
	'queryPaginationPrevious',
	'ungroup'
];

export default function IconInfo( props ) {
	const [ openTip, setOpenTip ] = useState( false );
	const [ title, setTitle ] = useState( 'Copy' );

	const { icon } = props;

	return (
		<>
			<Tooltip
				arrow
				open={ openTip }
				disableHoverListener
				placement='top'
				title={ title }
			>
				<CopyToClipboard
					text={ icon[0] }
					onCopy={() => {
						setTitle( 'Copied !!' );
						setOpenTip( true );
					}}
					>
					<li
						onMouseEnter={() => {
							if ( ! isMobile ) {
								setTitle( 'Copy' );
								setOpenTip( true );
							}
						}}
						onMouseLeave={() => {
							setOpenTip( false );
						}}
						>
						{0 <= newIcons.indexOf( icon[0]) && (
							<span className={ 'new' }>New</span>
						)}
						<Icon icon={ icon[1] } />
						<span>{ icon[0] }</span>
					</li>
				</CopyToClipboard>
			</Tooltip>
		</>
	);
}
