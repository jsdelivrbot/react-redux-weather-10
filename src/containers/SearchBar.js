import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onInputChange = (e) => {
    // controlled input for searching
    this.setState({term: e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    // fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
         placeholder="get a five-day forecast in selected cities"
         className="form-control"
         value={this.state.term}
         onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
