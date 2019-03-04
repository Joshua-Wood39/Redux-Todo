import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <ToDo />
      </div>
    );
  }
}




export default App;
