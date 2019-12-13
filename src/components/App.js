import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogIndex from './HogIndex'
import hogs from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogIndex hogs={hogs} />
      </div>
    )
  }
}

export default App;
