import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

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
						<InputAdornment position="start">{ /* <SearchIcon /> */ }</InputAdornment>
					),
					endAdornment: searchWord && (
						<IconButton aria-label="Delete Search Text" onClick={ () => setSearchWord( '' ) }>
							{ /* <CancelRoundedIcon /> */ }
						</IconButton>
					),
				} }
			/>
		</div>
	);
}
