import React from 'react';
import { Image } from 'react-native';
import { Input } from './baseComponents';

import searchImage from '../resources/icons/search.png';
import clearImage from '../resources/icons/clear.png';

export function Search(props) {
  return (
    <div style={{ ...{
      alignItems: 'center'
    }, ...props.style }}>
      <Image
        source={searchImage} alt=""
        style={{ height: 20, width: 20, marginRight: 10 }}
        onClick={() => props.onConfirm()}
      />

      <Input style={{ ...props.inputStyle, borderRadius: '8px', textAlign: 'left' }} onChange={(value) => props.onChange(value)} onEnter={() => props.onConfirm()} placeholder={props.placeholder} value={props.value} />

      <Image
        source={clearImage} alt=""
        style={{ height: 20, width: 20, marginLeft: 10 }}
        onClick={() => props.onClear()}
      />
    </div>
  );
}