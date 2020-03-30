import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "puppies"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchTerm = this.state.searchTerm.split(" ").join("+");
    this.props.fetchSearchGiphys(searchTerm);
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="input">
                <input type="text" id="input" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Search!" />
            </form>
            <ul>
                <GiphysIndex giphys={this.props.giphys}/>
            </ul>
        </div>
    );
  }
}

export default GiphysSearch