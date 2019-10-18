import React, { Component } from 'react';

import { Input, Button } from '../../components/componentNav';

export default class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      "email": "",
      "password": ""
    }
  }
  render(){
    return(
      <div style={{ margin: 10 }}>
        <p>E-Mail:</p>
        <Input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="E-Mail"
          onChange={(val) => this.setState({ email: val })}
          onEnter={() => this._postLogin()}  
        />

        <p>Password</p>
        <Input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={(val) => this.setState({ password: val })}
          onEnter={() => this._postLogin()}
        />
      
        <br /><br />
        <Button text="Login" onClick={() => this._postLogin()} />
      </div>
    );
  }

  // Data fetching
  _postLogin = () => {
    const { email, password } = this.state;
    this.setState({ password: "" });

    fetch(localStorage.getItem('url') + "/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
    .then((res) => res.json())
    .then((resJ) => {
      localStorage.setItem('authKey', resJ.data);
    });
  }
}