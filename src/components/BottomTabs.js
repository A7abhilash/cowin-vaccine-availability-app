import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {globalColors} from '../styles/styles';

export default function BottomTabs({findBy, setFindBy, FIND_BY}) {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        style={styles.bottomBtns}
        color={globalColors.Secondary}
        onPress={() => setFindBy(FIND_BY.PIN)}
        disabled={findBy === FIND_BY.PIN}>
        Find by pin
      </Button>
      <Button
        mode="contained"
        style={styles.bottomBtns}
        color={globalColors.Secondary}
        onPress={() => setFindBy(FIND_BY.DISTRICT)}
        disabled={findBy === FIND_BY.DISTRICT}>
        Find by districts
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    borderTopColor: globalColors.Gray,
    borderTopWidth: 1,
  },
  bottomBtns: {
    justifyContent: 'center',
  },
});
