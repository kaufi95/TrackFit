import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Pressable, FlatList } from 'react-native';

const HistoryScreenCard = (props) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setExercises(
      props.item.exercisesPerDate.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    );
  }, []);

  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        props.navigation.navigate('History Detail', {
          date: props.item.date,
          workout: props.item.workout,
          exercises: props.item.exercisesPerDate
        });
      }}
      key={props.item.workout.name + props.item.date}
    >
      <Text style={styles.name}>{props.item.workout.name}</Text>
      <FlatList
        style={styles.exercises}
        data={exercises}
        renderItem={({ item }) => <Text style={styles.exercise}>{item.name}</Text>}
        keyExtractor={(item, index) => item + index.toString()}
      />
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
    marginVertical: 5,
    marginBottom: 30,
    minHeight: 80
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
