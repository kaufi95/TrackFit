import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { clearWorkouts, insertTestdata } from '../services/StorageService';

const SettingsScreen = () => {
  return (
    <View style={styles.view}>
      <Button onPress={() => insertTestdata()} title="insert testdata" />
      <Button onPress={() => clearWorkouts()} title="clear workouts" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SettingsScreen;
