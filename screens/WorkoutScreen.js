import React, { useEffect, useState } from 'react';
import { Text, Pressable, StyleSheet, FlatList } from 'react-native';

const WorkoutScreen = ({ navigation, route }) => {
  const [exercises, setExercises] = useState();

  useEffect(() => {
    setExercises(route.params.workout.exercises);
  }, []);

  const exercise = (entry) => {
    return (
      <Pressable style={styles.button} onPress={() => navigation.navigate('Exercise', { exercise: entry.item })}>
        <Text>{entry.item.name.toUpperCase()}</Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={exercises}
      spacing={10}
      renderItem={(entry) => exercise(entry)}
      extraData={exercises}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 250,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 50,
    alignItems: 'center'
  }
});

export default WorkoutScreen;
