import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Stack } from 'native-base';

import CreateExercise from '../components/CreateExercise';

const CreateWorkout = () => {
  return (
    <Stack style={styles.containerView} w="100%" alignItems="center">
      <Input variant="rounded" placeholder="Workout" />
      <CreateExercise />
    </Stack>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CreateWorkout;
