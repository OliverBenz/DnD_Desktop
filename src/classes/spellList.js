import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Search from '../components/search.js';
import { Card } from '../components/card.js';
/* import { Card } from 'react-native-elements';
 */
export default class SpellList extends Component{
 
  constructor(props){
    super(props);

    this.state = {
      spellList: [],
      search: "",

      spellsPerPage: 20,
      page: 0,

      isLoading: false
    }
  }

  componentDidMount(){
    this._getSpellList();
  }

  render(){
    if(this.state.isLoading){
      // TODO: Center indivator to center of screen
      return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
         <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return(
      <ScrollView style={{flex: 1}}>
        <Search value={this.state.search} placeholder="Search..." onChange={(e) => this.setState({search: e})} onClear={() => this._clearFilter()} onConfirm={() => this._getSpellList(this.props.navigation.state.params.url + "/" + parseInt(this.state.page * this.state.spellsPerPage) + "/" + parseInt(this.state.spellsPerPage) + "/" + this.state.search)} />

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          { this.state.spellList.map(s => ( this._renderElement(s) )) }
        </View>
      </ScrollView>
    );
  }

  _renderElement = (s) => {
    return(
      <Card id={s.id} title={s.name} level={s.level} range={s.range} onPress={(id) => {}} />
    );
/*     return (
      <TouchableOpacity key={s.id} style={{marginBottom: 10}} onPress={() => {}} >
        <View style={{flexDirection: 'row'}} title={s.name}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Level: { s.level }</Text>
            <Text style={styles.text}>Range: { s.range }</Text>
          </View>
        </View>
      </TouchableOpacity>
    ) */
  }

  _getSpellList = () => {
    fetch('http://benz-prints.com:3004/dnd/general/spells/0/20', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((resJ) => {
      var spellList = resJ.data;

      this.setState({ spellList: spellList, isLoading: false, page: 0 });
    });
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: 'center'
  }
});