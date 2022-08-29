import { useState, useEffect } from 'react';
import IconInfo from './icon-info.jsx';
import Search from './search.jsx';

export default function IconList( props ) {
	const { defaultIconList } = props;
	const [ searchWord, setSearchWord ] = useState( '' );
	const [ iconList, setIconList ] = useState( defaultIconList );

	useEffect( () => {
		const regEx = new RegExp( searchWord.toLowerCase().trim() );
		const filteredIconList = defaultIconList.filter( ( icon ) => {
			return icon[ 0 ].toLowerCase().match( regEx );
		} );

		setIconList( filteredIconList );
	}, [ searchWord ] );

	return (
		<>
			<Search searchWord={ searchWord } setSearchWord={ setSearchWord } />
			<div className="iconlist">
				{ iconList.length ? (
					<ul>
						{ iconList.map( ( icon, index ) => (
							<li key={ index }>
								<IconInfo icon={ icon } />
							</li>
						) ) }
					</ul>
				) : (
					<p>No icons found.</p>
				) }
			</div>
		</>
	);
}
