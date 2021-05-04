import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {globalColors} from '../styles/styles';

export default function Loading() {
  return <ActivityIndicator size={30} color={globalColors.Danger} />;
}
