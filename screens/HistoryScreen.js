import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, Button } from 'react-native';

import HistoryScreenCard from '../components/HistoryScreenCard';

import { loadWorkouts } from '../services/WorkoutService';

const HistoryScreen = ({ navigation }) => {
  const [cardElements, setCardElements] = useState([]);

  useEffect(() => {
    loadWorkouts().then((workouts) => {
      prepareHistoryEntries(workouts);
    });
  }, []);

  const getDatesOfWorkout = (workout) => {
    let dates = [];
    workout.exercises.map((exercise) => {
      exercise.sessions?.forEach((session) => {
        dates.push(session.date);
      });
    });
    return dates;
  };

  const prepareHistoryEntries = (workouts) => {
    let elements = [];
    workouts.forEach((workout) => {
      getDatesOfWorkout(workout).forEach((date) => {
        let element = {
          name: workout.name,
          exercises: workout.exercises,
          date: date
        };
        elements.push(element);
      });
    });
    elements.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setCardElements(elements);
  };

  const renderHistory = () => {
    if (cardElements.length > 0) {
      return (
        <FlatList
          data={cardElements}
          style={styles.list}
          spacing={5}
          renderItem={({ item }) => <HistoryScreenCard card={item} navigation={navigation} />}
          keyExtractor={(item, index) => index.toString()}
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
