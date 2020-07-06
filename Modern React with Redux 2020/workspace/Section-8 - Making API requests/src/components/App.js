import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

/*
    Note1:
    If we had not added arrow function, we could have error on reference of this operator.
    Code without arrow function would be as mentioned below. Pls note the async place changes.
    async onSearchSubmit(term) {
            const response = await axios.get(url, params, headers);
    		console.log(response);
      };


      Note2:
      unsplash.get can be rewritten as axios.get(url, params, headers)
      To avoid repeated code of adding root url and authorization token while calling axios.get,
      we moved it to common function under unsplash and invoked it here.


*/
  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
