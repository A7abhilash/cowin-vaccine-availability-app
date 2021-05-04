import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalColors} from '../styles/styles';

export default function SelectFilter({selectedFilter, setSelectedFilter}) {
  const filters = ['All', '18 - 44', '45+'];
  return filters.map(filter => (
    <TouchableOpacity
      key={filter}
      onPress={
        filter === selectedFilter ? '' : () => setSelectedFilter(filter)
      }>
      <Text
        style={
          filter === selectedFilter ? styles.selected : styles.notSelected
        }>
        {filter}
      </Text>
    </TouchableOpacity>
  ));
}

const styles = StyleSheet.create({
  selected: {
    color: globalColors.Primary,
    fontWeight: 'bold',
  },
  notSelected: {
    color: globalColors.Secondary,
  },
});
