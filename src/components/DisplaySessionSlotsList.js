import React from 'react';
import {FlatList} from 'react-native';
import Error from '../containers/Error';
import SessionSlot from '../containers/SessionSlot';

export default function DisplaySessionSlotsList({sessionSlots}) {
  return sessionSlots.length ? (
    <FlatList
      data={sessionSlots}
      keyExtractor={(item, index) => `${item}${index}`}
      renderItem={({item}) => <SessionSlot slot={item} />}
    />
  ) : (
    <Error msg="No Vaccines Available" />
  );
}
