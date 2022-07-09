import './SearchBox.css';

const SearchBox = ({ onSearchChange, placeholder, className }) => (
	<div>
		<input
			className={className}
			type='search'
			placeholder={placeholder}
			onChange={onSearchChange}
		/>
	</div>
);

export default SearchBox;
