import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputModal from '../containers/InputModal';
import {globalColors, globalStyles} from '../styles/styles';

export default function FindByPin({pincode, setPincode}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <View>
      <View style={styles.horizontalView}>
        <Text style={{...globalStyles.textSubTitle, color: globalColors.Light}}>
          Pin code:
        </Text>
        <TouchableOpacity
          onPress={() => setOpenModal(true)}
          style={styles.textRight}>
          <Text style={styles.textRight}>
            {pincode ? pincode : 'Enter Pin Code Please!'}
          </Text>
        </TouchableOpacity>
      </View>
      <InputModal
        name="Pincode"
        text={pincode}
        setText={setPincode}
        openModal={openModal}
        setOpenModal={setOpenModal}
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
