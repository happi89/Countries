import { Component } from "react";
import lodash from "lodash";

import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.id = lodash.uniqueId("id_");

		this.state = {
			countries: [],
			inputValue: "",
		};
	}

	componentDidMount() {
		fetch("https://restcountries.com/v2/all")
			.then((res) => res.json())
			.then((users) =>
				this.setState(() => {
					return { countries: users };
				})
			);
	}

	onSearchChange = (e) => {
		const inputValue = e.target.value.toLowerCase();
		this.setState(() => {
			return { inputValue };
		});
	};

	render() {
		const { countries, inputValue } = this.state;
		const onSearchChange = this.onSearchChange;
		const id = this.id;

		const filteredCountries = countries.filter((country) => {
			return country.name.toLowerCase().includes(inputValue);
		});

		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search countries"
					onChange={onSearchChange}
				/>
				{filteredCountries.map((country) => {
					return (
						<div key={id}>
							<h1>{country.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
