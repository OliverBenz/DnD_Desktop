import React, { Component } from 'react';

import { Dropdown } from '../../components/componentNav';

export default class Character extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      charList: [],
      selected: ""
    }
  }

  componentDidMount(){
    this._getChar();
  }

  render(){
    let charList = this.state.charList;
    charList.map(c => {
      c.id = c.charString
      c.name = `${c.firstname} ${c.lastname} - Lvl: ${c.level}`;
    });

    return(
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <p style={{ marginRight: 10 }}>Character:</p>
        
        <Dropdown
          value={this.state.selected}
          onChange={(value) => this._updateSelected(value)}
          options={charList} />
      </div>
    );
  }

  _updateSelected = (value) => {
    localStorage.setItem('charString', value);
    this.setState({ selected: value });
    this._getCharInfo(value);
  }

  // Data fetching
  _getChar = () => {
    let url = localStorage.getItem('url') + '/user/charList';
    const authKey = localStorage.getItem('authKey');

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authKey}`
      }
    })
    .then((res) => res.json())
    .then((resJ) => {
      this.setState({ charList: resJ.data });
    });
  }

  _getCharInfo = (charString) => {
    let url = localStorage.getItem('url') + `/character/general/${charString}`;
    const authKey = localStorage.getItem('authKey');
    
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authKey}`
      }
    })
    .then((res) => res.json())
    .then((resJ) => {
      alert(JSON.stringify(resJ));
    })
  }
}