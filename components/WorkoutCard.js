import moment from 'moment';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import WorkoutMenu from './WorkoutMenu';

const WorkoutCard = (props) => {
  const getLastestDate = (workout) => {
    let lastestDate;
    workout.exercises.forEach((exercise) => {
      exercise.sessions?.forEach((session) => {
        if (lastestDate == undefined || lastestDate < session.date) {
          lastestDate = session.date;
        }
      });
    });
    return lastestDate;
  };

  const calculateDaysAgo = (workout) => {
    let lastestDate = getLastestDate(workout);

    if (lastestDate) {
      return moment().diff(lastestDate, 'days').toString() + ' days ago';
    } else {
      return 'Never';
    }
  };

  return (
    <Card style={styles.container} onPress={() => props.navigation.navigate('Workout', { workout: props.workout })}>
      <WorkoutMenu workout={props.workout} navigation={props.navigation} deleteWorkout={props.deleteWorkout} />
      <Card.Content style={styles.down}>
        <Title style={styles.name}>{props.workout.name}</Title>
        <Paragraph style={styles.date}>{calculateDaysAgo(props.workout)}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1abc9c',
    borderRadius: 5,
    padding: 5,
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
