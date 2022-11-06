import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { IconButton } from 'react-native-paper';

const ExerciseItem = (props) => {
  return (
    <Pressable
      style={styles.item}
      onPress={() =>
        props.navigation.navigate('Exercise', {
          exercise: props.exercise,
          workout: props.workout,
          updateExercise: props.updateExercise
        })
      }
    >
      <Text>{props.exercise.name.toUpperCase()}</Text>
      {props.done ? <IconButton icon="check-outline" size={25} color="green" /> : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    minWidth: '60%',
    width: '60%',
    height: 75,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    margin: 20,
    padding: 20,
    justifyContent: 'center'
  }
});

export default ExerciseItem;
