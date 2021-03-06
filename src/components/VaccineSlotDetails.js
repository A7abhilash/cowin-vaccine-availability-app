import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Badge} from 'react-native-paper';
import SelectFilter from '../containers/SelectFilter';
import {globalColors, globalStyles} from '../styles/styles';
import DisplaySessionSlotsList from './DisplaySessionSlotsList';

const DisplayData = ({name, value}) => (
  <View style={styles.horizontalView}>
    <Text style={styles.title}>{name}:</Text>
    <Text style={styles.textRight}>{value}</Text>
  </View>
);

export default function VaccineSlotDetails({openModal, setOpenModal, slot}) {
  const [displaySessionSlots, setDisplaySessionSlots] = useState(slot.sessions);
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    if (selectedFilter === 'All') {
      setDisplaySessionSlots(slot.sessions);
    } else if (selectedFilter === '18 - 44') {
      setDisplaySessionSlots(
        slot.sessions?.filter(item => item.min_age_limit === 18),
      );
    } else {
      setDisplaySessionSlots(
        slot.sessions?.filter(item => item.min_age_limit === 45),
      );
    }
  }, [selectedFilter, slot?.sessions]);

  return (
    <Modal visible={openModal} animationType="slide">
      <View style={globalStyles.component}>
        <View style={styles.topView}>
          <Text style={styles.topHeaderText}>Vaccine Slot Details</Text>
          <TouchableOpacity
            onPress={() => setOpenModal(false)}
            style={styles.btnClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.midView}>
            <DisplayData name="Center Name" value={slot.name} />
            <DisplayData name="Address" value={slot.address} />
            <DisplayData name="Pincode" value={slot.pincode} />
            <DisplayData name="District Name" value={slot.district_name} />
            <View style={styles.horizontalView}>
              <Text style={styles.title}>Fees:</Text>
              {slot.fee_type === 'Free' ? (
                <Badge key={new Date().getTime()} size={24} style={styles.free}>
                  Free
                </Badge>
              ) : (
                <>
                  {slot.vaccine_fees?.length ? (
                    slot.vaccine_fees?.map(({vaccine, fee}) => (
                      <Badge
                        key={new Date().getTime()}
                        size={24}
                        style={styles.paid}>
                        {vaccine}: ???{fee}
                      </Badge>
                    ))
                  ) : (
                    <Badge
                      key={new Date().getTime()}
                      size={24}
                      style={styles.paid}>
                      Details Not Available
                    </Badge>
                  )}
                </>
              )}
            </View>
          </View>
          <View style={styles.bottomView}>
            <Text style={{color: globalColors.Info, fontSize: 24}}>
              Slots ({slot.sessions.length})
            </Text>
            <View style={styles.filterView}>
              <Text style={{color: globalColors.Light}}>Filter By Age:</Text>
              <SelectFilter
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
            </View>
            <DisplaySessionSlotsList sessionSlots={displaySessionSlots} />
          </View>
        </ScrollView>
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
    fontSize: 18,
    flexShrink: 1,
  },
  topHeaderText: {
    fontSize: 26,
    color: globalColors.Primary,
    flexShrink: 1,
  },
  btnClose: {
    marginLeft: 'auto',
    marginRight: 5,
    backgroundColor: globalColors.Danger,
    padding: 5,
    borderRadius: 7,
  },
  title: {
    fontSize: 18,
    color: globalColors.Warning,
  },
  topView: {
    marginVertical: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomColor: globalColors.Secondary,
    borderBottomWidth: 1,
  },
  midView: {
    padding: 5,
    borderBottomColor: globalColors.Secondary,
    borderBottomWidth: 1,
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  free: {
    backgroundColor: globalColors.Success,
    fontSize: 12,
    marginLeft: 5,
  },
  paid: {
    color: globalColors.Dark,
    fontSize: 12,
    marginLeft: 5,
  },
  bottomView: {
    paddingVertical: 5,
    flex: 1,
  },
});
