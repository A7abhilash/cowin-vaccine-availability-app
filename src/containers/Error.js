import React from 'react';
import {View} from 'react-native';
import {Badge} from 'react-native-paper';

export default function Error({msg}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Badge size={30} style={{fontSize: 16}}>
        {msg}
      </Badge>
    </View>
  );
}
