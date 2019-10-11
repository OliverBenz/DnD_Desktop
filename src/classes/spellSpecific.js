import React, { Component } from 'react';

export default class SpellSpecific extends Component{
  render(){
    return(
      <div>
        <p>{ this.props.match.params.id }</p>
      </div>
    );
  }
}