import React from 'react';
import {FlatList, Text} from 'react-native';
import Error from '../containers/Error';
import VaccineSlot from '../containers/VaccineSlot';
import {globalColors} from '../styles/styles';

export default function DisplayVaccineSlotsList({vaccineSlots}) {
  return vaccineSlots.length ? (
    <>
      <Text style={{color: globalColors.Info, fontSize: 24}}>
        Vaccine Centers ({vaccineSlots.length})
      </Text>
      <FlatList
        data={vaccineSlots}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({item}) => <VaccineSlot slot={item} />}
      />
    </>
  ) : (
    <Error msg="No Vaccines Available" />
  );
}
