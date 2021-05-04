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

export default function SelectDistrictModal({
  districts,
  district,
  setDistrict,
  openDistrictModal,
  setOpenDistrictModal,
}) {
  return (
    <Modal visible={openDistrictModal} animationType="slide" transparent>
      <View style={styles.centeredView}>
        <View style={styles.innerView}>
          <ScrollView contentContainerStyle={styles.displayDistricts}>
            {districts.map(item =>
              item.district_name === district.district_name ? (
                <TouchableOpacity
                  key={item.district_id}
                  style={styles.selected}>
                  <Text
                    style={{
                      ...globalStyles.textSubTitle,
                      color: globalColors.Light,
                    }}>
                    {item.district_name}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  key={item.district_id}
                  onPress={() => setDistrict(item)}
                  style={styles.notSelected}>
                  <Text
                    style={{
                      ...globalStyles.textSubTitle,
                      color: globalColors.Light,
                    }}>
                    {item.district_name}
                  </Text>
                </TouchableOpacity>
              ),
            )}
          </ScrollView>
          <Button
            mode="contained"
            color={globalColors.Info}
            style={{marginTop: 10}}
            onPress={() => setOpenDistrictModal(false)}>
            Select District
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
  displayDistricts: {
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
