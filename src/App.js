import './index.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';

const App = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchCountries = async () => {
			const data = await fetch('https://restcountries.com/v2/all');
			const json = await data.json();
			setCountries(json);
		};
		fetchCountries();
	}, []);

	return (
		<div>
			<h1 className='navbar text-3xl font-bold shadow-lg p-4'>
				Where in the World?
			</h1>
			<Routes>
				<Route path='/' element={<Home countries={countries} />} />
				<Route path='countries/:name' element={<Country />} />
			</Routes>
		</div>
	);
};

export default App;
