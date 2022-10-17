import React from 'react';
import { StyleSheet } from 'react-native';

import { Pressable, View, Text } from 'native-base';

const WorkoutCard = (props) => {
  return (
    <Pressable onPress={() => props.navigation.navigate('Workout', { workout: props.workout })}>
      <View style={styles.container}>
        <Text style={styles.name}>{props.workout.name}</Text>
        <Text style={styles.date}>{props.workout.lastDate}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1abc9c',
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  date: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600'
  }
});

export default WorkoutCard;
