import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const ExerciseItem = (props) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => props.navigation.navigate('Exercise', { exercise: props.exercise, workout: props.workout })}
    >
      <Text>{props.exercise.name.toUpperCase()}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 250,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 50,
    alignItems: 'center'
  }
});

export default ExerciseItem;
