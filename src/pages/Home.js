import { useState, useEffect } from 'react';
import Card from '../components/Card';
import SearchBox from '../components/SearchBox';

const Home = ({ countries }) => {
	const [filteredCountries, setFilteredCountries] = useState([]);

	useEffect(() => {
		setFilteredCountries(countries);
	}, [countries]);

	const onSearchChange = (e) => {
		const newFilteredCountries = countries.filter((country) => {
			return country.name.toLowerCase().includes(e.target.value.toLowerCase());
		});

		setFilteredCountries(newFilteredCountries);
	};

	const onSelectChange = (e) => {
		const newFilteredCountries = countries.filter((country) => {
			return country.region.toLowerCase().includes(e.value.toLowerCase());
		});

		setFilteredCountries(newFilteredCountries);
	};

	const regions = Array.from(new Set(...[countries.map((c) => c.region)]));
	const regionOptions = regions.map((c) => {
		return { value: c, label: c };
	});
	regionOptions.unshift({ value: '', label: 'All' });

	return (
		<>
			<SearchBox
				onSearchChange={onSearchChange}
				onSelectChange={onSelectChange}
				placeholder={'search for a country'}
				options={regionOptions}
			/>

			<Card countries={filteredCountries} />
		</>
	);
};

export default Home;
