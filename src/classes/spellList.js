import React, { Component } from 'react';

import {
  Search,
  Card,
  ActivityIndicator
} from '../components/componentNav';

export default class SpellList extends Component{
 
  constructor(props){
    super(props);

    this.state = {
      spellList: [],
      search: "",

      spellsPerPage: 20,
      page: 0,

      isLoading: false
    }
  }

  componentDidMount(){
    this._getSpellList(1, "");
  }

  render(){
    if(this.state.isLoading){
      // TODO: Center indivator to center of screen
      return (
        <div style={{alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </div>
      );
    }

    return(
      <div style={{flex: 1}}>
        <Search value={this.state.search} placeholder="Search..." onChange={(e) => this.setState({search: e})} onClear={() => this._clearFilter()} onConfirm={() => this._getSpellList(1, this.state.search)} />

        <div style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          { this.state.spellList.map(s => ( <Card id={s.id} title={s.name} level={s.level} range={s.range} onClick={(id) => this.props.history.push(`/spells/${id}`)} /> )) }
        </div>
      </div>
    );
  }

  _clearFilter = () => {
    this.setState({ search: "" });
    this._getSpellList(1, "");
  }

  _getSpellList = (page, search) => {
    const spellPerPage = this.state.spellsPerPage;
    const offset = (page - 1) * spellPerPage;
    let url = `http://benz-prints.com:3004/dnd/general/spells/${offset}/${spellPerPage}`;

    if(search !== "") url+=`/${search}`;
    
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((resJ) => {
      var spellList = resJ.data;

      this.setState({ spellList: spellList, isLoading: false, page: 0 });
    });
  }
}