import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export class Card extends Component{
  render(){
    return(
      <TouchableOpacity style={{width: '50%'}} onPress={() => this.props.onPress(this.props.id)}>
        <View style={styles.wrapper} key={this.props.id}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.text}>{ this.props.title }</Text>
          </View>

          {/* Body */}
          <View style={{flexDirection: 'row'}}>
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>Level: { this.props.level }</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>Range: { this.props.range }</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    padding: 10,
    margin: 5
  },
  header: {
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    alignSelf: 'center'
  }
});