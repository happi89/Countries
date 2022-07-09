/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react';
import lodash from 'lodash';
import './Card.css';

class Card extends Component {
	render() {
		const { countries } = this.props;

		return (
			<div className='card-list'>
				{countries.map((country) => {
					const { name, population, region, capital, flags } = country;

					return (
						<div className={this.props.className} key={lodash.uniqueId('id_')}>
							<img src={flags.svg} alt='' />
							<h1>{name}</h1>
							<p>{population}</p>
							<p>{region}</p>
							<p>{capital}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Card;
