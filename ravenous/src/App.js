import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    console.log(BusinessList)
    return (
      <div className="App">
        <h1>ravenous</h1>
          <BusinessList />;
          <SearchBar />;
        </div>
    );
  }
};

export default App;