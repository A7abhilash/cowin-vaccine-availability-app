import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import BottomTabs from './src/components/BottomTabs';
import Header from './src/components/Header';
import {globalColors, globalStyles} from './src/styles/styles';

const FIND_BY = {
  PIN: 'find-by-pin',
  DISTRICT: 'find-by-district',
};

const App = () => {
  const [findBy, setFindBy] = useState(FIND_BY.PIN);

  return (
    <>
      <Header />
      <View style={globalStyles.component}>
        <View style={styles.topView}></View>
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
  topView: {flex: 0.3},
  midView: {flex: 1},
  bottomView: {
    flex: 0.1,
  },
});
