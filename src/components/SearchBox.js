import Select from 'react-select';

const SearchBox = ({
	onSearchChange,
	onSelectChange,
	placeholder,
	options,
}) => (
	<div className='mb-8 p-6 flex flex-wrap gap-x-8 gap-y-2 items-center justify-around'>
		<input
			className='input input-bordered w-full max-w-xs shadow-sm'
			type='search'
			placeholder={placeholder}
			onChange={onSearchChange}
		/>
		<Select onChange={onSelectChange} options={options} />
	</div>
);

export default SearchBox;
