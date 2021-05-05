import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Card, Chip} from 'react-native-paper';
import {globalColors} from '../styles/styles';

const DisplayData = ({name, value}) => (
  <View style={styles.horizontalView}>
    <Text style={styles.title}>{name}:</Text>
    <Text style={styles.textRight}>{value}</Text>
  </View>
);

export default function SessionSlot({slot}) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <DisplayData name="Date" value={slot.date} />
        <DisplayData name="Vaccine" value={slot.vaccine} />
        <DisplayData name="Min. Age Limit" value={`${slot.min_age_limit}+`} />
        <View style={styles.horizontalView}>
          <Text style={styles.title}>Capacity Available:</Text>
          <Text
            style={{
              ...styles.textRight,
              color:
                slot.available_capacity === 0
                  ? globalColors.Danger
                  : globalColors.Success,
              fontWeight: 'bold',
            }}>
            {slot.available_capacity}
          </Text>
        </View>
        <FlatList
          horizontal
          data={slot.slots}
          keyExtractor={(item, index) => `${item}${index}`}
          renderItem={({item}) => (
            <Chip
              style={styles.chip}
              textStyle={{
                fontSize: 12,
                color: globalColors.Light,
              }}>
              {item}
            </Chip>
          )}
          style={{marginTop: 5, paddingBottom: 5}}
          showsHorizontalScrollIndicator={false}
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: globalColors.LightGray,
    marginVertical: 5,
  },
  horizontalView: {
    // marginVertical: 5,
    flexDirection: 'row',
  },
  textRight: {
    color: globalColors.Light,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    color: globalColors.Warning,
  },
  chip: {
    height: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    backgroundColor: globalColors.Gray,
  },
});
