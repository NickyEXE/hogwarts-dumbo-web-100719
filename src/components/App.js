import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogIndex from './HogIndex'
import hogs from '../porkers_data';

class App extends Component {

  state={
    filter: false,
    sortByName: true
  }

  toggle = (arg) => {
    this.setState({[arg]: !this.state[arg]})
  }

  filterHogs = () => {
    return hogs.filter(hog => hog.greased)
  }

  render() {
    const filteredHogs = this.state.filter ? this.filterHogs() : hogs
    const filteredHogsSortedByName = () => filteredHogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
    const filteredHogsSortedByWeight = () => filteredHogs.sort((hog1, hog2) => hog2.weight - hog1.weight )
    const sortedAndFilteredHogs = this.state.sortByName ? filteredHogsSortedByName() : filteredHogsSortedByWeight()

    return (
      <div className="App">
          < Nav 
            changeFilter={() => this.toggle("filter")} 
            changeSort={() => this.toggle("sortByName")} 
            sortByName={this.state.sortByName} 
            filter={this.state.filter} 
          />
          < HogIndex hogs={sortedAndFilteredHogs} />
      </div>
    )
  }
}

export default App;
