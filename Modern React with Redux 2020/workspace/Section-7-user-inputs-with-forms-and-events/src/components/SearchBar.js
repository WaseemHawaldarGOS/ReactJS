import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

/*
    If we had not used arrow function, we could have found below error:
    Cannot read property 'state' of undefined
    Read course notes line no. 188 onwards to see 3 ways of fixing this issue.
*/
  onFormSubmit = event => {
    event.preventDefault();
    /*
        Below code is calling parent function called as onSubmit from child component.
    */
    this.props.onSubmit(this.state.term);
  };


/*
    onChange = {this.onInputChange}
    If we add () at the end of onInputChange then onInputChange function will be called everytime we render the SearchBar component.
    If we don't add () then it will be called only on 'onChange' event.
*/
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
