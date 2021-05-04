import moment from 'moment';
import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native-paper';
import {globalColors, globalStyles} from '../styles/styles';

export default function SelectDate({date, setDate}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <View style={styles.horizontalView}>
      <Text style={{...globalStyles.textSubTitle, color: globalColors.Light}}>
        Date:
      </Text>
      <TouchableOpacity
        onPress={() => setOpenModal(true)}
        style={styles.textRight}>
        <Text style={styles.textRight}>{date.toDateString()}</Text>
      </TouchableOpacity>
      <Modal visible={openModal} animationType="slide" transparent>
        <View style={styles.centeredView}>
          <View style={styles.innerView}>
            <DatePicker
              date={date}
              onDateChange={setDate}
              mode="date"
              style={{
                backgroundColor: globalColors.Gray,
                height: 100,
              }}
              textColor={globalColors.Light}
              fadeToColor="none"
            />
            <Button
              mode="contained"
              color={globalColors.Info}
              style={{marginTop: 10}}
              onPress={() => setOpenModal(false)}>
              Select date
            </Button>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  innerView: {
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: globalColors.Gray,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
