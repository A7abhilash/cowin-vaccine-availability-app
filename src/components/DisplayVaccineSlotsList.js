import React from 'react';
import {FlatList} from 'react-native';
import Error from '../containers/Error';
import VaccineSlot from '../containers/VaccineSlot';

export default function DisplayVaccineSlotsList({vaccineSlots}) {
  return vaccineSlots.length ? (
    <FlatList
      data={vaccineSlots}
      keyExtractor={(item, index) => `${item}${index}`}
      renderItem={({item}) => <VaccineSlot slot={item} />}
    />
  ) : (
    <Error msg="No Vaccines Available" />
  );
}
