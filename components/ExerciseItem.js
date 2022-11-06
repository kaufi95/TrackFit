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
      <Text style={styles.text}>{props.exercise.name.toUpperCase()}</Text>
      {props.done ? <IconButton icon="check-outline" size={25} color="#1abc9c" /> : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    minWidth: '80%',
    width: '80%',
    maxWidth: '80%',
    height: 75,
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1abc9c',
    margin: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 17,
    color: 'black'
  }
});

export default ExerciseItem;
