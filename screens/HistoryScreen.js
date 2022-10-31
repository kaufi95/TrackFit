import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, Pressable, Modal } from 'react-native';
import moment from 'moment';

import { loadWorkouts } from '../services/StorageService';

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
    return (
      <FlatList
        //temDimension={100}
        data={cardElements}
        style={styles.list}
        spacing={5}
        renderItem={({ item }) => renderCard(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  return renderHistory();
};

const styles = StyleSheet.create({
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
