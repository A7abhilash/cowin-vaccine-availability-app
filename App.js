import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {
  fetchStates,
  fetchVaccineSlotsByDistrict,
  fetchVaccineSlotsByPincode,
} from './src/api/fetchApi';
import BottomTabs from './src/components/BottomTabs';
import FindByDistrict from './src/components/FindByDistrict';
import FindByPin from './src/components/FindByPin';
import Header from './src/components/Header';
import Loading from './src/containers/Loading';
import Error from './src/containers/Error';
import SelectDate from './src/containers/SelectDate';
import {globalColors, globalStyles} from './src/styles/styles';
import DisplayVaccineSlotsList from './src/components/DisplayVaccineSlotsList';

const FIND_BY = {
  PIN: 'find-by-pin',
  DISTRICT: 'find-by-district',
};

const App = () => {
  const [findBy, setFindBy] = useState(FIND_BY.PIN);
  const [date, setDate] = useState(new Date());
  const [pincode, setPincode] = useState('');
  const [district, setDistrict] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [vaccineSlots, setVaccineSlots] = useState(null);
  const [states, setStates] = useState(null);

  useEffect(() => {
    fetchStates().then(data => {
      setStates(data);
    });
  }, []);

  useEffect(() => {
    // console.log(findBy);
    if (findBy === FIND_BY.PIN) {
      setDistrict('');
    } else {
      setPincode('');
    }
    setVaccineSlots(null);
    setLoading(false);
    setError(false);
  }, [findBy]);

  const findVaccines = async () => {
    let formattedDate = moment(date).format('DD-MM-YYYY');
    // console.log(formattedDate);
    // console.log(district);

    try {
      setVaccineSlots(null);
      setLoading(true);
      setError(false);
      if (findBy === FIND_BY.PIN) {
        if (!pincode) {
          return alertEmptyFields();
        }
        const {data} = await fetchVaccineSlotsByPincode(pincode, formattedDate);
        // console.log(data);
        setVaccineSlots(data);
      } else {
        if (!district) {
          return alertEmptyFields();
        } //562106
        const {data} = await fetchVaccineSlotsByDistrict(
          district.district_id,
          formattedDate,
        );
        // console.log(data);
        setVaccineSlots(data);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
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
              district={district}
              setDistrict={setDistrict}
              states={states}
            />
          )}
          <SelectDate date={date} setDate={setDate} />
          <Button onPress={findVaccines} color={globalColors.Success}>
            Find vaccines
          </Button>
        </View>
        <View style={styles.midView}>
          <View style={{marginVertical: 10}}>
            {loading && <Loading />}
            {error && <Error msg="Server Error, Please try later..." />}
          </View>
          {vaccineSlots !== null && (
            <DisplayVaccineSlotsList vaccineSlots={vaccineSlots} />
          )}
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
