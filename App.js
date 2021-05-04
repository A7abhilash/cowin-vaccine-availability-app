import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import {globalStyles} from './src/styles/styles';

const App = () => {
  return (
    <>
      <Header />
      <View style={globalStyles.container}>
        <Text style={styles.text}>Hello World!!!</Text>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
});
