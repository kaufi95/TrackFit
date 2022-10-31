import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, Pressable, Button } from 'react-native';
import moment from 'moment';

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

  const renderCard = (item) => {
    return (
      <View style={styles.card}>
        <Text style={styles.date}>{moment(item.date).format('DD.MM.YYYY')}</Text>
        <Pressable
          style={styles.innerCard}
          onPress={() => {
            navigation.navigate('Progress', { workout: item });
          }}
        >
          <Text style={styles.name}>{item.name}</Text>
        </Pressable>
      </View>
    );
  };

  const renderHistory = () => {
    if (cardElements.length > 0) {
      return (
        <FlatList
          data={cardElements}
          style={styles.list}
          spacing={5}
          renderItem={({ item }) => renderCard(item)}
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
  },
  card: {
    padding: 15
  },
  innerCard: {
    backgroundColor: '#1abc9c',
    padding: 15,
    borderRadius: 10
  },
  date: {
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 20
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default HistoryScreen;
