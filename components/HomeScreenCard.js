import moment from 'moment';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import WorkoutMenu from './WorkoutMenu';

const HomeScreenCard = (props) => {
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

    if (!lastestDate) {
      return 'Never';
    } else if (moment().isSame(lastestDate, 'day')) {
      return 'Today';
    } else if (moment().subtract(1, 'days').isSame(lastestDate, 'day')) {
      return 'Yesterday';
    } else {
      return moment().diff(lastestDate, 'days') + ' days ago';
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
    backgroundColor: '#7fd3bc',
    borderRadius: 5,
    padding: 5
  },
  up: {
    alignSelf: 'flex-end'
  },
  down: {
    marginTop: 'auto'
  },
  name: {
    fontSize: 16,
    fontWeight: '600'
  },
  date: {
    fontSize: 12,
    fontWeight: '600'
  }
});

export default HomeScreenCard;
