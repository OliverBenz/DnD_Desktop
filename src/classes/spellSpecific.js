import React, { Component } from 'react';
import { ActivityIndicator } from '../components/componentNav';

export default class SpellSpecific extends Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      spell: {}
    }
  }
  
  componentDidMount(){
    this._getSpell(this.props.match.params.spellId);
  }

  render(){
    const { name, range, duration, concentration, castTime, ritual, schoolName, desc, higher_level, material } = this.state.spell;

    if(this.state.isLoading){
      return(
        <ActivityIndicator />
      )
    }
    
    return(
      <div style={{ margin: 10 }}>
        <h1>{ name }</h1>

        <table>
          <tr>
            <td>Range</td>
            <td>{ range }</td>
          </tr>
          <tr>
            <td>Casting Time</td>
            <td>{ castTime }</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>{ duration }</td>
          </tr>
          <tr>
            <td>School</td>
            <td>{ schoolName }</td>
          </tr>

          { material === "" ? ""
          : <tr>
            <td>Material</td>
            <td>{ material }</td>
          </tr> }

          </table>

          { concentration === 0 ? ""
          : <p>Concentration Spell</p> }

          { ritual === 0 ? ""
          : <p>Ritual Spell</p> }


        <br />

        <p style={{ fontWeight: 'bold' }}>Description:</p>
        <p>{ desc }</p>
        
        <br />
        { higher_level === "" ? "" : <div><p style={{ fontWeight: 'bold' }} >At Higher Levels:</p><p>{ higher_level }</p></div> }
      
      </div>
    );
  }

  _getSpell = (id) => {
    fetch(`http://benz-prints.com:3004/dnd/general/spellSpec/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((resJ) => {
      if(resJ.success){
        this.setState({ spell: resJ.data[0] });
        if(this.state.isLoading) this.setState({ isLoading: false });
      }
    });
  }
}