import { Component } from 'react';
import _ from 'lodash';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.id = _.uniqueId("prefix-");

    this.state = {
      countries: []
    }
  }
  
  componentDidMount() {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(users => this.setState(() => {
        return {countries: users}
      }))
  }

  render() {
    const id = this.id;

    return (
      <div className="App">
        {this.state.countries.map((country) => {
          return (
            <div key={id}>
              <h1>{country.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
