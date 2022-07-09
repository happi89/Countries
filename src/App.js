import { Component } from "react";
import lodash from "lodash";
import "./index.css";
import Card from "./components/card/Card";
import SearchBox from "./components/searchbox/SearchBox";

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

		const filteredCountries = countries.filter((country) => {
			return country.name.toLowerCase().includes(inputValue);
		});

		return (
			<div className="App">
				<SearchBox onSearchChange={onSearchChange} />
				<Card countries={filteredCountries} />
			</div>
		);
	}
}

export default App;
