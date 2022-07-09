import { Component } from "react";

class SearchBox extends Component {
	render() {
		return (
			<input
				className="search-box"
				type="search"
				placeholder="search countries"
				onChange={this.props.onSearchChange}
			/>
		);
	}
}

export default SearchBox;
