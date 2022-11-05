import React from 'react';
import { StyleSheet, View, Text, Pressable, unstable_enableLogBox } from 'react-native';

const HistoryScreenCard = (props) => {
  const renderExercises = () => {
    return props.item.exercises.map((exercise) => {
      return <Text style={styles.exercise}>{exercise.name}</Text>;
    });
  };

  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        props.navigation.navigate('History Detail', {
          date: props.item.date,
          workoutName: props.item.workoutName,
          exercises: props.item.exercises
        });
      }}
    >
      <Text style={styles.name}>{props.item.workoutName}</Text>
      <View style={styles.exercises}>{renderExercises()}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#7fd3bc',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    minHeight: 80,
    marginBottom: 30
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  exercises: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  exercise: {
    fontSize: 16
  }
});

export default HistoryScreenCard;
