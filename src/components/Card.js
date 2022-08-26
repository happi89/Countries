import { Link } from 'react-router-dom';

const Card = ({ countries }) => {
	const roundNum = (num) => {
		if (num > 999) {
			return Math.round(num / 100) / 10 + 'k';
		}
	};

	return (
		<div className='flex flex-wrap gap-12 justify-center'>
			{countries.map((country) => {
				const { name, flags, population, region, capital } = country;
				return (
					<div className='card w-96 bg-base-100 shadow-lg p-6' key={name}>
						<Link to={`countries/${name}`}>
							<img className='h-52 w-80' src={flags.svg} alt={`${name} flag`} />
							<h1 className='font-bold text-xl my-4'>{name}</h1>
							<p>
								<span className='font-bold'>Population:</span>{' '}
								{roundNum(population)}
							</p>
							<p>
								<span className='font-bold'>Region:</span> {region}
							</p>
							<p>
								<span className='font-bold'>Capital:</span> {capital}
							</p>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
