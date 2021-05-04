import React from 'react';
import {View} from 'react-native';
import {Badge} from 'react-native-paper';

export default function Error() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <Badge size={30} style={{fontSize: 16}}>
        Server Error!
      </Badge>
    </View>
  );
}
