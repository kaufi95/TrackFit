import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Title } from 'react-native-paper';

import moment from 'moment';

const ProgressScreen = (props) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    let workout = props.route.params.workout;
    let exercises = workout.exercises.find((exercise) => exercise.id === props.route.params.exercise.id).sessions;
    setSessions(exercises);
  }, []);

  const renderSet = (set) => {
    return (
      <View style={styles.set}>
        <Text style={styles.text}>{set.index + 1}. Set</Text>
        <Text style={styles.text}>{set.weight} kg</Text>
        <Text style={styles.text}>{set.repeats} repeats</Text>
      </View>
    );
  };

  const renderSession = (session) => {
    let color;
    if (session.index % 2 === 0) {
      color = '#e0f4ee';
    } else {
      color = '#a2decc';
    }
    return (
      <View style={[styles.session, { backgroundColor: color }]}>
        <Text style={styles.date}>{moment(session.item.date).format('DD.MM.YYYY')}</Text>
        <FlatList
          data={session.item.sets}
          spacing={10}
          renderItem={(item) => renderSet(item.item)}
          extraData={session.item.sets}
          keyExtractor={(item, index) => index.toString()}
          removeClippedSubviews={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.view}>
      <Title style={styles.name}>{props.route.params.exercise.name}</Title>
      <FlatList
        data={sessions}
        spacing={10}
        renderItem={(item) => renderSession(item)}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column'
  },
  set: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 20,
    padding: 5
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 20
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 30
  },
  text: {
    fontSize: 18
  }
});

export default ProgressScreen;
