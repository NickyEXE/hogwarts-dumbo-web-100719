import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogIndex from './HogIndex.js'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    filter: false,
    sortByName: true
  }

  toggleFilter = () => {
    this.setState({filter: !this.state.filter})
  }

  toggleName = () => {
    this.setState({sortByName: !this.state.sortByName})
  }

  render() {

    console.hogs(hogs)
    const filteredHogs = this.state.filter ? hogs.filter(hog => hog.greased) : hogs
    const hogsSortedByName = () => filteredHogs.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))
    const hogsSortedByWeight = () => filteredHogs.sort((hogA, hogB) => hogB.weight - hogA.weight)
    let whichHogs = () => {
      if(this.state.sortByName){
        return hogsSortedByName()
      }
      else {
        return hogsSortedByWeight()
      }
    }


    return (
      <div className="App">
          < Nav toggleFilter={this.toggleFilter} toggleName={this.toggleName} />
          < HogIndex hogs={whichHogs()}/>

      </div>
    )
  }
}

export default App;
