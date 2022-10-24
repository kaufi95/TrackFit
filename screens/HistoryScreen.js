import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, Pressable } from 'react-native';
import moment from 'moment';

import { loadWorkouts } from '../scripts/storage';

const HistoryScreen = () => {
  const [cardElements, setCardElements] = useState([]);

  useEffect(() => {
    loadWorkouts().then((workouts) => {
      buildHistoryCards(workouts);
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

  const buildHistoryCards = (workouts) => {
    let cards = [];
    workouts.forEach((workout) => {
      getDatesOfWorkout(workout).forEach((date) => {
        let card = {
          workoutName: workout.name,
          date: date
        };
        cards.push(card);
      });
    });
    cards.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setCardElements(cards);
  };

  const renderCard = (item) => {
    return (
      <View style={styles.card}>
        <Text style={styles.date}>{moment(item.date).format('DD.MM.YYYY')}</Text>
        <Pressable
          style={styles.innerCard}
          onPress={() => {
            alert('hallo');
          }}
        >
          <Text style={styles.name}>{item.workoutName}</Text>
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
