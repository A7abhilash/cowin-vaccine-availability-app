import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function FindByDistrict({districtId, setDistrictId}) {
  return (
    <View>
      <Text style={styles.text}>DISTRICT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: 'white',
  },
});