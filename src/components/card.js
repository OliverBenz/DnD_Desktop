import React, { Component } from 'react';


export class Card extends Component{
  render(){
    return(
      <button style={{width: '50%', backgroundColor: 'transparent', border: 'none'}} onClick={() => this.props.onClick(this.props.id)}>
        <div style={styles.wrapper} key={this.props.id}>
          {/* Header */}
          <div style={styles.header}>
            <p style={styles.text}>{ this.props.title }</p>
          </div>

          {/* Body */}
          <div>
            <div style={ styles.body }>
              <p style={styles.text}>Level: { this.props.level }</p>
            </div>
            <div style={ styles.body }>
              <p style={styles.text}>Range: { this.props.range }</p>
            </div>
          </div>
        </div>
      </button>
    );
  }
}

const styles = {
  wrapper: {
    border: '1px solid black',
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