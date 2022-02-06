import React from 'react';
import './App.scss';
import omdb from './rest-services/omdb';
import { SearchBar } from './components/SearchBar';

class App extends React.Component {
  
  
    handleSubmit = async (term) => {
      const response = await omdb.get('/', {
          params: {
              s: term
          }
      })
      console.log(response);
      // this.setState({
      //     videos: response.data.items
      // })
    };

    render() {
      return (
        <SearchBar handleFormSubmit={this.handleSubmit}/>
      )
    }
}

export default App;
