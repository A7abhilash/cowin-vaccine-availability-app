import React from 'react';
import {View} from 'react-native';
import {Badge} from 'react-native-paper';
import {globalColors} from '../styles/styles';

export default function Error({msg}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Badge size={30} style={{fontSize: 16, color: globalColors.Dark}}>
        {msg}
      </Badge>
    </View>
  );
}
