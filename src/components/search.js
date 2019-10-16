import React from 'react';
import { Input } from './baseComponents';

import searchImage from '../resources/icons/search.png';

export function Search(props) {
  return (
    <div style={{ ...styles.serachField, ...props.style }}>
      <img
        source={searchImage} alt=""
        style={{...styles.searchImage, marginRight: 10 }}
        onClick={() => props.onConfirm()}
      />

      <Input style={{ ...props.inputStyle, textAlign: 'left' }} onChange={(value) => props.onChange(value)} onEnter={() => props.onConfirm()} placeholder={props.placeholder} value={props.value} />

      <img
        source={require('../resources/icons/clear.png')} alt=""
        style={{ ...styles.searchImage, marginLeft: 10 }}
        onClick={() => props.onClear()}
      />
    </div>
  );
}

const styles = {
  searchField: {
    borderWidth: 1,
    borderColor: '#a8b0bd',
    alignItems: 'center',
    padding: 10,
    margin: 10
  },
  searchImage: {
    height: 20,
    width: 20
  }
};