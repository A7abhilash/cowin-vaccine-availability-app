import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {globalColors} from '../styles/styles';

export default function BottomTabs({findBy, setFindBy, FIND_BY}) {
  return findBy === FIND_BY.PIN ? (
    <Button
      mode="contained"
      style={styles.bottomBtns}
      color={globalColors.Gray}
      onPress={() => setFindBy(FIND_BY.DISTRICT)}>
      Find by district
    </Button>
  ) : (
    <Button
      mode="contained"
      style={styles.bottomBtns}
      color={globalColors.Gray}
      onPress={() => setFindBy(FIND_BY.PIN)}>
      Find by pin code
    </Button>
  );
}

const styles = StyleSheet.create({
  bottomBtns: {
    justifyContent: 'center',
  },
});
