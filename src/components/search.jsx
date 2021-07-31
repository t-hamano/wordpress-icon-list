import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

export default function IconInfo( props ) {
	const { searchWord, setSearchWord } = props;

	return (
		<div className="search">
			<TextField
				onChange={( event ) => setSearchWord( event.target.value )}
				placeholder="Search Icon"
				fullWidth
				value={ searchWord }
				type="text"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
					endAdornment: searchWord && (
						<IconButton
							aria-label="Delete Search Text"
							onClick={() => setSearchWord( '' )}
						>
							<CancelRoundedIcon/>
						</IconButton>
					)
				}}
			/>
		</div>
	);
}
