import React, { Component } from 'react';
import Contacts from './components/contacts';
import { Dropdown } from 'semantic-ui-react'
import { genre, species, status, sort } from "./components/dropdown";
import './App.css'

class App extends Component {
  state = {
    contacts: [],
  }

  onChangeDropdownAscDesc = (e, data) => {
    this.sorteddata = this.state.contacts.sort((a, b) => a.id - b.id)
    if (data.value === 'Ascendant') {
      this.setState(this.state.contacts = this.sorteddata);
    }
    else {
      this.setState(this.state.contacts = this.sorteddata.reverse())
    }
  }

  onChangeDropdown = (e, data) => {
    this.filterData = this.state.contacts.filter(cont => {
      return cont[data.filter] == data.value;
    })
    this.setState(this.state.contacts = this.filterData)
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data.results })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <tbody>
          <tr>
            <h1 className="h11">Characters of Rick and Morty Show</h1>
          </tr>
          <tr>

            <div className={"Filters"}>
              <Dropdown
                placeholder="filter by species"
                selection clearable
                options={species}
                onChange={this.onChangeDropdown}
                filter={'species'}
              />
              <Dropdown
                placeholder="filter by status"
                selection clearable
                options={status}
                onChange={this.onChangeDropdown}
                filter={'status'}
              />
              <Dropdown
                placeholder="filter by genre"
                selection clearable
                options={genre}
                onChange={this.onChangeDropdown}
                filter={'gender'}
              />
              <Dropdown
                placeholder="filter by ASC and DESC"
                selection clearable
                options={sort}
                onChange={this.onChangeDropdownAscDesc}
                filter={'id'}
              />
            </div>
          </tr>
          <tr>
            <div className="Gallery">
              {this.state.contacts.map(cont => <Contacts character={cont} />)}
            </div>
          </tr>
        </tbody>
      </div >

    );
  }
}

export default App;