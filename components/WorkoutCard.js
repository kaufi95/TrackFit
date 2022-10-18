import React from 'react';
import { StyleSheet } from 'react-native';
import { Pressable, View, Text } from 'native-base';

import WorkoutMenu from './WorkoutMenu';

const WorkoutCard = (props) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => props.navigation.navigate('Workout', { workout: props.workout })}
    >
      <View style={styles.up}>
        <WorkoutMenu workout={props.workout} />
      </View>
      <View style={styles.down}>
        <Text style={styles.name}>{props.workout.name}</Text>
        <Text style={styles.date}>{props.workout.lastDate}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1abc9c',
    borderRadius: 5,
    padding: 10,
    height: 150
  },
  up: {
    alignSelf: 'flex-end'
  },
  down: {
    marginTop: 'auto'
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
