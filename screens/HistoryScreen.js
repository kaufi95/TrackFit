import React, { useState, useEffect } from 'react';
import { Button, StyleSheet } from 'react-native';

import { FlatGrid } from 'react-native-super-grid';

import WorkoutCard from '../components/WorkoutCard';
import { loadWorkouts } from '../scripts/storage';

const HistoryScreen = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    loadWorkouts().then((workouts) => {
      workouts.sort((workout1, workout2) => workout1.lastDate < workout2.lastDate);
      setWorkouts(workouts);
    });
  }, []);

  const renderWorkouts = () => {
    return (
      <FlatGrid
        itemDimension={150}
        data={workouts}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => <WorkoutCard workout={item} navigation={navigation} />}
        extraData={workouts}
      />
    );
  };

  return renderWorkouts();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HistoryScreen;
