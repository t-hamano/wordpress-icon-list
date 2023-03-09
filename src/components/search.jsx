import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Icon, close, search } from '@wordpress/icons';

export default function Search( { searchWord, setSearchWord } ) {
	return (
		<div className="search">
			<TextField
				onChange={ ( event ) => setSearchWord( event.target.value ) }
				placeholder="Search Icon"
				fullWidth
				value={ searchWord }
				type="text"
				InputProps={ {
					startAdornment: (
						<InputAdornment position="start">
							<Icon icon={ search } />
						</InputAdornment>
					),
					endAdornment: searchWord && (
						<IconButton aria-label="Delete Search Text" onClick={ () => setSearchWord( '' ) }>
							<Icon icon={ close } />
						</IconButton>
					),
				} }
			/>
		</div>
	);
}
