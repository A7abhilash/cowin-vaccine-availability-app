import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {globalColors} from '../styles/styles';

export default function Header() {
  return (
    <Appbar.Header style={styles.appbar}>
      <Appbar.Content
        title="CoWIN Vaccine Availability 🇮🇳"
        subtitle="Stay Home, Stay Safe, Get Vaccinated!"
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: globalColors.Dark,
  },
});
