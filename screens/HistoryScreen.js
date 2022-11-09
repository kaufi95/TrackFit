import React, { useState, useEffect } from 'react';
import { StyleSheet, SectionList, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import HistoryScreenCard from '../components/HistoryScreenCard';

import moment from 'moment';

import { loadWorkoutsForHistory, getDatesOfAllWorkouts, getDatesOfWorkout } from '../services/WorkoutService';

const HistoryScreen = ({ navigation }) => {
  const [historyElements, setHistoryElements] = useState([]);

  useEffect(() => {
    loadWorkoutsForHistory().then((workouts) => {
      prepareSectionListData(workouts);
    });
  }, []);

  const prepareSectionListData = (workouts) => {
    let historyElements = getDatesOfAllWorkouts(workouts).map((date) => {
      let workoutsPerDate = [];

      workouts.forEach((workout) => {
        if (getDatesOfWorkout(workout).some((element) => moment(element).isSame(date))) {
          if (!workoutsPerDate.includes(workout)) {
            workoutsPerDate.push(workout);
          }
        }
      });

      let data = workoutsPerDate.map((workout) => {
        let element = {
          date: moment(date).format('DD.MM.YYYY'),
          workout: workout,
          exercisesPerDate: []
        };

        workout.exercises.forEach((exercise) => {
          exercise.sessions?.forEach((session) => {
            if (moment(session.date).isSame(moment(date))) {
              element.exercisesPerDate.push({
                id: exercise.id,
                name: exercise.name,
                sets: session.sets
              });
            }
          });
        });

        return element;
      });

      data = data.sort((a, b) => {
        return a.workout.name.localeCompare(b.workout.name);
      });

      return {
        date: date,
        data: data
      };
    });
    setHistoryElements(historyElements);
  };

  const renderHistory = () => {
    if (historyElements.length > 0) {
      return (
        <SectionList
          sections={historyElements}
          style={styles.list}
          renderItem={({ item }) => <HistoryScreenCard item={item} navigation={navigation} />}
          renderSectionHeader={({ section: { date } }) => (
            <Text style={styles.date}>{moment(date).format('DD.MM.YYYY')}</Text>
          )}
          keyExtractor={(item, index) => item + index.toString()}
          removeClippedSubviews={false}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>No data to show.</Text>
          <Button style={styles.button} onPress={() => navigation.navigate('Create a Workout')}>
            Add your first workout
          </Button>
        </View>
      );
    }
  };

  return renderHistory();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lottie: {
    width: 150,
    height: 150
  },
  list: {
    flex: 1,
    marginTop: 20
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 25
  },
  text: {
    fontSize: 18
  },
  button: {
    width: '80%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    margin: 25,
    backgroundColor: '#59c8ac'
  }
});

export default HistoryScreen;
