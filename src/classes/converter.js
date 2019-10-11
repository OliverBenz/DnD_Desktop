import React, { Component } from 'react';

export default class Converter extends Component{
  constructor(props){
    super(props);

    this.state = {
      meter: "",
      yard: "",
      result: 0,
      resType: "Meters",
    }
  }

  _update = ({value, name}) => {
    if(name === "meter"){
      let y = (parseInt(value) * 1.0936).toFixed(2);
      this.setState({result: y, resType: "Yards", meter: value});
    }
    else if(name === "yard"){
      let m = (parseInt(value) / 1.0936).toFixed(2);
      this.setState({result: m, resType: "Meters", yard: value});  
    }
  }

  _reset = () => {
    this.setState({meter: "", yard: "", result: 0, resType: "Meters"});
  }

  render(){
    return(
      <div style={ styles.container }>
        <p style={ styles.text }>Meters: </p>
        <input style={ styles.text } type="number" name="meter" onChange={(e) => this._update(e.target)} value={this.state.meter} />
        
        <p style={ styles.text }>Yards: </p>
        <input style={ styles.text } type="number" name="yard" onChange={(e) => this._update(e.target)} value={this.state.yard} />

        <p style={ styles.text }>Result: {this.state.result} {this.state.resType}</p>

        <button style={styles.button} onClick={() => this._reset()} >Reset</button>
      </div>
    );
  }
}

const styles={
  container: {
    padding: 10
  },
  text: {
    fontSize: 16
  },
  button: {
    textAlign: 'center',
    fontSize: 16,
    padding: 5,
    width: 80
  },
}