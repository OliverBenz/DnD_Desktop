import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { Link } from 'react-router-dom';

export default class NavBar extends Component{

  render(){
    return(
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.button}>
          <Link style={{color: 'white', fontSize: 18, textDecorationLine: 'none'}} to="/home">Home</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Link style={{color: 'white', fontSize: 18, textDecorationLine: 'none'}} to="/SpellList">SpellList</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Link style={{color: 'white', fontSize: 18, textDecorationLine: 'none'}} to="/converter">Converter</Link>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 5,
    backgroundColor: '#333333',
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  button: {
    padding: 10
  }
});