import React, { Component } from 'react';

export class Button extends Component{
  constructor(props){
    super(props);

    this.state = {
      borderColor: 'transparent',
      boxShadow: 'none'
    }
  }

  render(){
    const { borderColor, boxShadow } = this.state;
    return(
      <button 
        style={{...{
          backgroundColor: '#378afa',
          color: 'white',
          
          // margin: '5px',
          width: '90px',

          border: 'none',
          borderRadius: '4px',
          borderColor: borderColor,
          boxShadow: boxShadow,
          
          paddingTop: '15px',
          paddingBottom: '15px',

          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px'
        }, ...this.props.style}}
        onMouseOver={() => this.setState({ borderColor: '#008CBA', boxShadow: '0 6px 8px 0 rgba(0,0,0,0.24), 0 15px 28px 0 rgba(0,0,0,0.19)' })}
        onMouseOut={() => this.setState({ backgroundColor: '#008CBA', boxShadow: 'none' })}
        onClick={() => this.props.onClick()} >
          { this.props.text }
      </button>
    );
  }
}

export class Input extends Component{
  render(){
    return(
      <input 
      style={{...{
        fontSize: '16px',
        border: '1px solid #aeaeae',

        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '4px',
        paddingRight: '4px',
      }, ...this.props.style }}
      value={this.props.value}
      placeholder={this.props.placeholder}
      type={this.props.type}
      name={this.props.name}
      onChange={(e) => this.props.onChange(e.target.value)}
      onKeyPress={(e) => this._onKeyPress(e.key, e.target.value)}
      />
    );
  }

  _onKeyPress = (key, value) => {
    if(key === "Enter") this.props.onEnter(value);
  }
}


export function Dropdown(props){
  return(
    <select
      style={{...{
        fontSize: 16,
        backgroundColor: 'transparent',
        // borderColor: '#aeaeae',
        border: 'none',
        paddingLeft: 10,
        paddingRight: 10
      }, ...props.style}}
      name={props.name}
      onChange={(e) => props.onChange(e.target.value)}
      value={props.value}
    >
      {
        props.options.map(o => 
          <option
            style={{...{
              border: '1px solid black'
              // borderColor: '#aeaeae'
            }, ...props.optionStyle}}
            value={o.id}
          >
          {o.name}
          </option>
        )
      }
    </select>
  );
}