import React, { useState, useEffect } from 'react';
import { StyleSheet, SectionList, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import HistoryScreenCard from '../components/HistoryScreenCard';

import moment from 'moment';

import { loadWorkoutsForHistory } from '../services/WorkoutService';

const HistoryScreen = ({ navigation }) => {
  const [historyElements, setHistoryElements] = useState([]);

  useEffect(() => {
    loadWorkoutsForHistory().then((workouts) => {
      prepareSectionListData(workouts);
    });
  }, []);

  const getAllDates = (workouts) => {
    let dates = [];
    workouts.map((workout) => {
      workout.exercises.map((exercise) => {
        exercise.sessions.map((session) => {
          let date = moment(new Date(session.date)).startOf('day');
          if (!dates.some((element) => element.isSame(date))) {
            dates.push(date);
          }
        });
      });
    });
    return dates;
  };

  const getDatesOfWorkout = (workout) => {
    let dates = [];
    workout.exercises.map((exercise) => {
      exercise.sessions?.forEach((session) => {
        dates.push(session.date);
      });
    });
    return dates;
  };

  const prepareSectionListData = (workouts) => {
    let historyElements = [];
    getAllDates(workouts).forEach((date) => {
      let workoutNamesByDate = [];
      workouts.forEach((workout) => {
        if (getDatesOfWorkout(workout).some((element) => moment(element).isSame(date))) {
          if (!workoutNamesByDate.includes(workout.name)) {
            workoutNamesByDate.push(workout.name);
          }
        }
      });

      let data = [];

      workoutNamesByDate.forEach((workoutName) => {
        let exercises = [];
        workouts.forEach((workout) => {
          if (workout.name === workoutName) {
            workout.exercises.forEach((exercise) => {
              exercise.sessions?.forEach((session) => {
                if (moment(session.date).isSame(date)) {
                  exercises.push(exercise);
                }
              });
            });
          }
        });

        let formattedDate = moment(date).format('DD.MM.YYYY');

        data.push({
          date: formattedDate,
          workoutName: workoutName,
          exercises: exercises
        });
      });

      let object = {
        date: date,
        data: data
      };
      historyElements.push(object);
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
