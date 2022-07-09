import { Component } from "react";
import lodash from "lodash";

class Card extends Component {
	render() {
		const { countries } = this.props;

		return (
			<div>
				{countries.map((country) => (
					<div className="country" key={lodash.uniqueId("id_")}>
						<img src={country.flags.svg} alt="" />
						<h1>{country.name}</h1>
					</div>
				))}
			</div>
		);
	}
}

export default Card;
