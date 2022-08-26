import { Link } from 'react-router-dom';

const Card = (props) => (
	<div className='flex flex-wrap gap-12 justify-center'>
		{props.countries.map((country) => {
			return (
				<div className='card w-96 bg-base-100 shadow-lg p-6' key={country.name}>
					<Link to={`countries/${country.name}`}>
						<img
							className='h-52 w-80'
							src={country.flags.svg}
							alt={`${country.name} flag`}
						/>
						<h1 className='font-bold text-xl my-4'>{country.name}</h1>
						<p>
							<span className='font-bold'>Population:</span>{' '}
							{country.apopulation}
						</p>
						<p>
							<span className='font-bold'>Region:</span> {country.region}
						</p>
						<p>
							<span className='font-bold'>Capital:</span> {country.capital}
						</p>
					</Link>
				</div>
			);
		})}
	</div>
);

export default Card;
