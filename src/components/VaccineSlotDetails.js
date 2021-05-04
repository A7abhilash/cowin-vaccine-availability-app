import React from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
// import {} from 'react-native-paper';
import {globalColors, globalStyles} from '../styles/styles';
import DisplaySessionSlotsList from './DisplaySessionSlotsList';

const DisplayData = ({name, value}) => (
  <View style={styles.horizontalView}>
    <Text style={styles.title}>{name}:</Text>
    <Text style={styles.textRight}>{value}</Text>
  </View>
);

export default function VaccineSlotDetails({openModal, setOpenModal, slot}) {
  return (
    <Modal visible={openModal} animationType="slide">
      <View style={globalStyles.component}>
        <View style={styles.topView}>
          <Text style={styles.topHeaderText}>Vaccine Slot Details</Text>
          <View style={{marginLeft: 'auto', marginRight: 5}}>
            <Button
              color={globalColors.Danger}
              onPress={() => setOpenModal(false)}
              title="Close"
            />
          </View>
        </View>
        <View style={styles.midView}>
          <DisplayData name="Center Name" value={slot.name} />
          <DisplayData name="Address" value={slot.address} />
          <DisplayData name="Pincode" value={slot.pincode} />
          <DisplayData name="District Name" value={slot.district_name} />
        </View>
        <View style={styles.bottomView}>
          <Text style={{color: globalColors.Success, fontSize: 24}}>
            Slots ({slot.sessions.length})
          </Text>
          <DisplaySessionSlotsList sessionSlots={slot.sessions} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  horizontalView: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  textRight: {
    color: globalColors.Light,
    marginLeft: 10,
    ...globalStyles.textTitle,
  },
  topHeaderText: {
    fontSize: 26,
    color: globalColors.Primary,
  },
  title: {
    fontSize: 16,
    color: globalColors.Warning,
    ...globalStyles.textTitle,
  },
  topView: {
    marginVertical: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: globalColors.Secondary,
    borderBottomWidth: 1,
  },
  midView: {
    padding: 5,
    borderBottomColor: globalColors.Secondary,
    borderBottomWidth: 1,
  },
  bottomView: {
    paddingVertical: 5,
    flex: 1,
  },
});
