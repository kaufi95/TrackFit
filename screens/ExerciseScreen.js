import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExerciseScreen = (props) => {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    setExercise(props.route.params.exercise);
  }, []);

  return (
    <View style={styles.containerView}>
      <Text>{exercise.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ExerciseScreen;
