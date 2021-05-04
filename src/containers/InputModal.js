import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {globalColors} from '../styles/styles';

export default function InputModal({
  text,
  setText,
  openModal,
  setOpenModal,
  name,
}) {
  return (
    <Modal visible={openModal} animationType="slide" transparent>
      <View style={styles.centeredView}>
        <View style={styles.innerView}>
          <TextInput label={name} value={text} onChangeText={setText} />
          <Button
            mode="contained"
            color={globalColors.Info}
            style={{marginTop: 10}}
            onPress={() => setOpenModal(false)}>
            Enter
          </Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  innerView: {
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: globalColors.Gray,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
