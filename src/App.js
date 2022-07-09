import './index.css';
import Card from './components/card/Card';
import SearchBox from './components/searchbox/SearchBox';
import { useState, useEffect } from 'react';

const App = () => {
	const [countries, setCountries] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [filteredCountries, setFilteredCountries] = useState(countries);

	useEffect(() => {
		fetch('https://restcountries.com/v2/all')
			.then((res) => res.json())
			.then((users) => setCountries(users));
	}, []);

	useEffect(() => {
		const newFilteredCountries = countries.filter((country) => {
			return country.name.toLowerCase().includes(inputValue);
		});

		setFilteredCountries(newFilteredCountries);
	}, [countries, inputValue]);

	const onSearchChange = (e) => {
		const inputeField = e.target.value.toLowerCase();
		setInputValue(inputeField);
	};

	return (
		<div className='App'>
			<h1>Where in the World?</h1>

			<SearchBox
				onSearchChange={onSearchChange}
				placeholder={'search for a country'}
				className={'search-box'}
			/>

			<Card countries={filteredCountries} className={'country'} />
		</div>
	);
};

export default App;
