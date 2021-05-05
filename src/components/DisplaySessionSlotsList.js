import React from 'react';
import Error from '../containers/Error';
import SessionSlot from '../containers/SessionSlot';

export default function DisplaySessionSlotsList({sessionSlots}) {
  return sessionSlots.length ? (
    sessionSlots.map((item, index) => (
      <SessionSlot slot={item} key={`${item}${index}`} />
    ))
  ) : (
    <Error msg="No Vaccines Available" />
  );
}
