import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {globalColors, globalStyles} from '../styles/styles';

export default function VaccineSlot({slot}) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{slot.name}</Text>
        <Text style={styles.subtitle}>{slot.address}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: globalColors.LightGray,
    marginVertical: 5,
  },
  title: {
    color: globalColors.Light,
    ...globalStyles.textTitle,
  },
  subtitle: {
    color: globalColors.Light,
    ...globalStyles.textSubTitle,
  },
});
