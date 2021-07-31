import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from '@material-ui/core/Tooltip';
import { Icon } from '@wordpress/icons';

export default function IconInfo( props ) {
	const [ openTip, setOpenTip ] = useState( false );
	const { icon } = props;

	return (
		<>
			<Tooltip
				arrow
				open={ openTip }
				disableHoverListener
				placement='top'
				title={ 'Copied!!' }
			>
				<CopyToClipboard
					text={ icon[0] }
					onCopy={() => {
						setOpenTip( true );
					}}
					>
					<li
						onMouseLeave={() => {
							setOpenTip( false );
						}}
						>
						<Icon icon={ icon[1] } />
						<span>{ icon[0] }</span>
					</li>
				</CopyToClipboard>
			</Tooltip>
		</>
	);
}
