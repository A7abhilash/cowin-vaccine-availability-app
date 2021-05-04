import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {
  fetchVaccineSlotsByDistrict,
  fetchVaccineSlotsByPincode,
} from './src/api/fetchApi';
import BottomTabs from './src/components/BottomTabs';
import FindByDistrict from './src/components/FindByDistrict';
import FindByPin from './src/components/FindByPin';
import Header from './src/components/Header';
import SelectDate from './src/containers/SelectDate';
import {globalColors, globalStyles} from './src/styles/styles';

const FIND_BY = {
  PIN: 'find-by-pin',
  DISTRICT: 'find-by-district',
};

const App = () => {
  const [findBy, setFindBy] = useState(FIND_BY.PIN);
  const [date, setDate] = useState(new Date());
  const [pincode, setPincode] = useState('');
  const [districtId, setDistrictId] = useState('');

  useEffect(() => {
    // console.log(findBy);
    if (findBy === FIND_BY.PIN) {
      setDistrictId('');
    } else {
      setPincode('');
    }
  }, [findBy]);

  const findVaccines = async () => {
    let formattedDate = moment(date).format('DD-MM-YYYY');
    console.log(formattedDate);
    console.log(pincode);
    // if (findBy === FIND_BY.PIN) {
    // if (!pincode) return alertEmptyFields();
    //   const {vaccineSlots, loading, error} = await fetchVaccineSlotsByPincode(
    //     pincode,
    //     formattedDate,
    //   );
    // } else {
    // if (!districtId) return alertEmptyFields();
    //   const {vaccineSlots, loading, error} = await fetchVaccineSlotsByDistrict(
    //     districtId,
    //     formattedDate,
    //   );
    // }
  };

  const alertEmptyFields = () => {
    Alert.alert('Invalid', "Empty fields aren't allowed!!!", [
      {text: 'Understood'},
    ]);
  };

  return (
    <>
      <Header />
      <View style={globalStyles.component}>
        <View style={styles.topView}>
          {findBy === FIND_BY.PIN ? (
            <FindByPin pincode={pincode} setPincode={setPincode} />
          ) : (
            <FindByDistrict
              districtId={districtId}
              setDistrictId={setDistrictId}
            />
          )}
          <SelectDate date={date} setDate={setDate} />
          <Button onPress={findVaccines} color={globalColors.Info}>
            Find vaccines
          </Button>
        </View>
        <View style={styles.midView}>
          <Text style={styles.text}>Hello World!!!</Text>
        </View>
        <View style={styles.bottomView}>
          <BottomTabs findBy={findBy} setFindBy={setFindBy} FIND_BY={FIND_BY} />
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: 'white',
  },
  // topView: {flex: 0.3},

  midView: {
    flex: 1,
    borderTopColor: globalColors.Gray,
    borderTopWidth: 1,
    paddingTop: 5,
  },
  bottomView: {
    flex: 0.1,
    borderTopColor: globalColors.Gray,
    borderTopWidth: 1,
    paddingTop: 5,
  },
});
