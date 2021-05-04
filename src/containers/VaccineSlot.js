import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Badge, Card} from 'react-native-paper';
import {globalColors, globalStyles} from '../styles/styles';

export default function VaccineSlot({slot}) {
  return (
    <>
      <TouchableOpacity>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>{slot.name}</Text>
            <Text style={styles.subtitle}>{slot.address}</Text>
          </Card.Content>
          <View style={styles.badge}>
            <Badge size={24} style={styles.text}>
              {slot.fee_type === 'Free' ? 'Free' : slot.fee}
            </Badge>
          </View>
        </Card>
      </TouchableOpacity>
    </>
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
  text: {
    color: globalColors.Light,
    fontSize: 16,
  },
});
