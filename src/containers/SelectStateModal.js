import React from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';
import {globalColors, globalStyles} from '../styles/styles';

export default function SelectStateModal({
  states,
  selectedState,
  setSelectedState,
  openStateModal,
  setOpenStateModal,
}) {
  return (
    <Modal visible={openStateModal} animationType="slide" transparent>
      <View style={styles.centeredView}>
        <View style={styles.innerView}>
          <ScrollView contentContainerStyle={styles.displayStates}>
            {states.map(item =>
              item.state_name === selectedState?.state_name ? (
                <TouchableOpacity key={item.state_id} style={styles.selected}>
                  <Text
                    style={{
                      ...globalStyles.textSubTitle,
                      color: globalColors.Light,
                    }}>
                    {item.state_name}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  key={item.state_id}
                  onPress={() => setSelectedState(item)}
                  style={styles.notSelected}>
                  <Text
                    style={{
                      ...globalStyles.textSubTitle,
                      color: globalColors.Light,
                    }}>
                    {item.state_name}
                  </Text>
                </TouchableOpacity>
              ),
            )}
          </ScrollView>
          <Button
            mode="contained"
            color={globalColors.Info}
            style={{marginTop: 10}}
            onPress={() => setOpenStateModal(false)}>
            Select State
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
    height: '30%',
  },
  displayStates: {
    alignItems: 'center',
  },
  selected: {
    backgroundColor: globalColors.Primary,
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
  notSelected: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
});
