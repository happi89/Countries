import { Stats } from './../components/stats';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Country = () => {
	const [country, setCountry] = useState('');

	const { name } = useParams();

	useEffect(() => {
		const fetchCountries = async () => {
			const data = await fetch(
				`https://restcountries.com/v2/name/${name.toLowerCase()}?fullText=true`
			);
			const json = await data.json();
			setCountry(json[0]);
		};
		fetchCountries();
	}, [name]);

	return (
		<div className='min-h-screen'>
			<Link to='/'>
				<button className='btn w-32 m-16'>Back</button>
			</Link>
			<div className='flex'>
				<img
					className='h-96 w-[32rem] ml-16'
					src={country?.flags?.svg}
					alt={country?.name + 'flag'}
				/>
				<Stats country={country} />
				<div className='ml-32 mt-24'>ff</div>
			</div>
		</div>
	);
};

export default Country;
