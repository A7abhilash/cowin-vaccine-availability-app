import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fetchDistricts} from '../api/fetchApi';
import SelectStateModal from '../containers/SelectStateModal';
import {globalColors, globalStyles} from '../styles/styles';

export default function FindByDistrict({district, setDistrict, states}) {
  const [districts, setDistricts] = useState(null);
  const [selectedState, setSelectedState] = useState(states[0]);
  const [openStateModal, setOpenStateModal] = useState(false);
  const [openDistrictModal, setOpenDistrictModal] = useState(false);

  useEffect(() => {
    if (selectedState) {
      fetchDistricts(selectedState.state_id).then(data => {
        setDistricts(data);
        setDistrict(data[0]);
      });
    }
  }, [selectedState, setDistrict]);

  return (
    <View>
      <View style={styles.horizontalView}>
        <Text style={{...globalStyles.textSubTitle, color: globalColors.Light}}>
          State:
        </Text>
        <TouchableOpacity
          onPress={() => setOpenStateModal(true)}
          style={styles.textRight}>
          <Text style={styles.textRight}>{selectedState.state_name}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalView}>
        <Text style={{...globalStyles.textSubTitle, color: globalColors.Light}}>
          District:
        </Text>
        <TouchableOpacity
          onPress={() => setOpenDistrictModal(true)}
          style={styles.textRight}>
          <Text style={styles.textRight}>{district.district_name}</Text>
        </TouchableOpacity>
      </View>
      <SelectStateModal
        states={states}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        openStateModal={openStateModal}
        setOpenStateModal={setOpenStateModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalView: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  textRight: {
    ...globalStyles.textSubTitle,
    color: globalColors.Light,
    marginLeft: 'auto',
  },
});
