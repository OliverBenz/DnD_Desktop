import React, { Component } from 'react';

import {
  Search,
  Card,
  NavButtons,
  ActivityIndicator
} from '../components/componentNav';

export default class SpellList extends Component{
 
  constructor(props){
    super(props);

    this.state = {
      spellList: [],
      search: "",

      spellsPerPage: 10,
      page: 1,

      isLoading: false
    }
  }

  componentDidMount(){
    this._getSpellList(1, this.state.search);
    this._getSpellCount();
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
      <div>
        <Search inputStyle={{ width: '300px' }} style={{alignItems: 'center'}} value={this.state.search} placeholder="Search..." onChange={(e) => this.setState({search: e})} onClear={() => this._clearFilter()} onConfirm={() => this._getSpellList(1, this.state.search)} />

        <div style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          { this.state.spellList.map(s => ( <Card spell={s} onClick={(id) => this.props.history.push(`/spells/${id}`)} /> )) }
        </div>

        <NavButtons
          pageCount={201}
          page={this.state.page}

          onChange={(page) => this.setState({ page: page })}
          onEnter={() => this._getSpellList(this.state.page, "")}
          onClickNext={() => this._onClickNext()}
          onClickBack={() => this._onClickBack()}
        />
      </div>
    );
  }

  _onClickBack = () => {
    const { page, filter } = this.state;
    
    this._getSpellList(page - 1, filter);
    this.setState({ page: page - 1 });
  }
  _onClickNext = () => {
    const { page, filter } = this.state;

    this._getSpellList(page + 1, filter);
    this.setState({ page: page + 1 });
  }

  _clearFilter = () => {
    this.setState({ search: "" });
    this._getSpellList(1, "");
  }

  _getSpellList = (page, search) => {
    const spellPerPage = this.state.spellsPerPage;
    const offset = (page - 1) * spellPerPage;
    let url = `http://benz-prints.com:3004/dnd/general/spells/${offset}/${spellPerPage}`;

    if(search !== undefined) url+=`/${search}`;
    
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((resJ) => {
      if(resJ.success && resJ.data.length !== 0){
        this.setState({ spellList: resJ.data });
        if(this.state.isLoading === true) this.setState({ isLoading: false });
      }
    });
  }

  _getSpellCount = () => {
    /* TODO: Backend -> same request as getUserSpells and getSpells, just with COUNT(id) */
  }
}