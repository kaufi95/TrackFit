import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const HistoryScreenCard = (props) => {
  const renderExercises = () => {
    return props.item.exercises.map((exercise) => {
      return <Text>{exercise.name}</Text>;
    });
  };

  return (
    <View style={styles.card}>
      <Pressable
        style={styles.innerCard}
        onPress={() => {
          props.navigation.navigate('History Detail', {
            date: props.item.date,
            workoutName: props.item.workoutName,
            exercises: props.item.exercises
          });
        }}
      >
        <Text style={styles.name}>{props.item.workoutName}</Text>
        {renderExercises()}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15
  },
  date: {
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 20
  },
  innerCard: {
    backgroundColor: '#7fd3bc',
    padding: 15,
    borderRadius: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default HistoryScreenCard;
