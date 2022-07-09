/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
	render() {
		return (
			<input
				className={this.props.className}
				type='search'
				placeholder={this.props.placeholder}
				onChange={this.props.onSearchChange}
			/>
		);
	}
}

export default SearchBox;
