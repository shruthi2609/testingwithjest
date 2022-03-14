import React, { Component } from 'react';
import Items from './Items';

class App extends Component {
  render() {
    const items = [
      "React",
      "js",
      "express"
      
    ];
    return (
      <Items items={items} />
    );
  }
}
export default App;

