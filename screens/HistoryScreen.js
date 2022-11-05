import React, { useState, useEffect } from 'react';
import { StyleSheet, SectionList, View, Text, Button } from 'react-native';

import HistoryScreenCard from '../components/HistoryScreenCard';

import moment from 'moment';

import { loadWorkouts } from '../services/WorkoutService';

const HistoryScreen = ({ navigation }) => {
  const [historyElements, setHistoryElements] = useState([]);

  useEffect(() => {
    loadWorkouts().then((workouts) => {
      prepareSectionListData(workouts);
    });
  }, []);

  const getAllDates = (workouts) => {
    let dates = [];
    workouts.map((workout) => {
      workout.exercises.map((exercise) => {
        exercise.sessions.map((session) => {
          let date = moment(new Date(session.date).setHours(0, 0, 0, 0));
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
          spacing={5}
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
          <Text>No data to show.</Text>
          <Button onPress={() => navigation.navigate('Create a Workout')} title="Add your first workout" />
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
  }
});

export default HistoryScreen;
