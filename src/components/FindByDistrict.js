import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fetchDistricts, fetchStates} from '../api/fetchApi';
import SelectDistrictModal from '../containers/SelectDistrictModal';
import SelectStateModal from '../containers/SelectStateModal';
import {globalColors, globalStyles} from '../styles/styles';

export default function FindByDistrict({district, setDistrict}) {
  const [districts, setDistricts] = useState(null);
  const [states, setStates] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [openStateModal, setOpenStateModal] = useState(false);
  const [openDistrictModal, setOpenDistrictModal] = useState(false);

  useEffect(() => {
    fetchStates()
      .then(data => {
        // console.log(data);
        setStates(data);
        setSelectedState(data[0]);
      })
      .catch(e => {
        Alert.alert('Error', "States coudn't be loaded, Please try again!!!", [
          {text: 'OK'},
        ]);
      });
  }, []);

  useEffect(() => {
    if (selectedState) {
      setDistricts(null);
      fetchDistricts(selectedState.state_id)
        .then(data => {
          setDistricts(data);
          setDistrict(data[0]);
        })
        .catch(e => {
          Alert.alert(
            'Error',
            "Districts coudn't be loaded, Please try again!!!",
            [{text: 'OK'}],
          );
        });
    }
  }, [selectedState, setDistrict]);

  return (
    <View>
      <View style={styles.horizontalView}>
        <Text style={{...globalStyles.textSubTitle, color: globalColors.Light}}>
          State:
        </Text>
        {states === null ? (
          <Text style={styles.textRight}>Loading States...</Text>
        ) : (
          <TouchableOpacity
            onPress={() => setOpenStateModal(true)}
            style={styles.textRight}>
            <Text style={styles.textRight}>{selectedState?.state_name}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.horizontalView}>
        <Text style={{...globalStyles.textSubTitle, color: globalColors.Light}}>
          District:
        </Text>
        {districts === null ? (
          <Text style={styles.textRight}>Loading Districts...</Text>
        ) : (
          <TouchableOpacity
            onPress={() => setOpenDistrictModal(true)}
            style={styles.textRight}>
            <Text style={styles.textRight}>{district?.district_name}</Text>
          </TouchableOpacity>
        )}
      </View>
      {states !== null && (
        <SelectStateModal
          states={states}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          openStateModal={openStateModal}
          setOpenStateModal={setOpenStateModal}
        />
      )}
      {districts !== null && (
        <SelectDistrictModal
          districts={districts}
          district={district}
          setDistrict={setDistrict}
          openDistrictModal={openDistrictModal}
          setOpenDistrictModal={setOpenDistrictModal}
        />
      )}
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
