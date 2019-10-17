import React from 'react';
import { Image } from 'react-native';
import { Input } from './baseComponents';

import searchImage from '../resources/icons/search.png';

export function Search(props) {
  return (
      <div style={{ ...{
        display: 'inline-block',
        alignItems: 'center',
        border: '1px solid #aeaeae',
        borderRadius: 8,
        
      }, ...props.style }}>
        <Image
          source={searchImage} alt=""
          style={{ height: 20, width: 20, marginLeft: 10, marginRight: 10, float: 'left' }}
          onClick={() => props.onConfirm()}
        />

        <Input style={{ ...props.inputStyle, borderRadius: '8px', textAlign: 'left', float: 'right', border: 'none' }} onChange={(value) => props.onChange(value)} onEnter={() => props.onConfirm()} placeholder={props.placeholder} value={props.value} />
      </div>

  );
}