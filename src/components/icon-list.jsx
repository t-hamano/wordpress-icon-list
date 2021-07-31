import { useState, useEffect } from 'react';
import Icon from './icon.jsx';
import Search from './search.jsx';

export default function IconList( props ) {
	const { defaultIconList } = props;
	const [ searchWord, setSearchWord ] = useState( '' );
	const [ iconList, setIconList ] = useState( defaultIconList );

  useEffect( () => {
		const regEx = new RegExp( searchWord.toLowerCase().trim() );
		const filteredIconList = defaultIconList.filter( ( icon ) => {
			return icon[0].toLowerCase().match( regEx );
		});
		setIconList( filteredIconList );
  }, [ searchWord ]);

	return (
		<>
			<Search
				searchWord={ searchWord }
				setSearchWord={ setSearchWord }
			/>
			<ul className={ 'iconlist' }>
				{
					iconList.map( ( icon, index ) => {
						return <Icon key={ index } icon={ icon } />;
					})
				}
			</ul>
		</>
	);
}
