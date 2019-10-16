import React, { Component } from 'react';

export class Card extends Component{
  constructor(props){
    super(props);

    this.state = {
      boxShadow: 'none',

    }
  }
  
  render(){
    const { boxShadow } = this.state;
    const { id, name, level, range } = this.props.spell;

    return(
      <button
      style={{...{
        width: '400px',
        backgroundColor: 'transparent',
        boxShadow: boxShadow,
        border: '1px solid #aeaeae',
        borderRadius: 8,
        margin: '5px'
      }, ...this.props.style}}
      onClick={() => this.props.onClick()}
      onMouseOver={() => this.setState({ boxShadow: '0 6px 8px 0 rgba(0,0,0,0.24), 0 15px 28px 0 rgba(0,0,0,0.19)' })} 
      onMouseOut={() => this.setState({ boxShadow: 'none' })}
      >
        <div style={styles.wrapper} key={id}>
          {/* Header */}
          <div style={styles.header}>
            <p style={styles.text}>{ name }</p>
          </div>
  
          {/* Body */}
          <div>
            <div style={ styles.body }>
              <p style={styles.text}>Level: { level }</p>
            </div>
            <div style={ styles.body }>
              <p style={styles.text}>Range: { range }</p>
            </div>
          </div>
        </div>
      </button>
    );
  }
}

const styles = {
  wrapper: {
    padding: 5,
    margin: 5,
  },
  header: {
    marginBottom: 5
  },
  body: {
    display: 'inline-block',
    width: '50%'
  },
  text: {
    fontSize: 18,
    alignSelf: 'center'
  }
};