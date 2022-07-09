import lodash from 'lodash';
import './Card.css';

const Card = (props) => (
	<div className='card-list'>
		{props.countries.map((country) => {
			return (
				<div className={props.className} key={lodash.uniqueId('id_')}>
					<img src={country.flags.svg} alt={`${country.name} flag`} />
					<h1>{country.name.common}</h1>
					<p>Population: {country.population}</p>
					<p>Region: {country.region}</p>
					<p>Capital: {country.capital}</p>
				</div>
			);
		})}
	</div>
);

export default Card;
