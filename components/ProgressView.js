import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Title } from 'react-native-paper';

import moment from 'moment';

const ProgressView = (props) => {
  const renderSet = (set) => {
    return (
      <View style={styles.set}>
        <Text>Set: {set.index + 1}</Text>
        <Text>Weight: {set.weight}</Text>
        <Text>Repeats: {set.repeats}</Text>
      </View>
    );
  };

  const renderSession = (session) => {
    return (
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={session.sets}
          spacing={10}
          renderItem={({ item }) => renderSet(item)}
          extraData={session.sets}
          keyExtractor={(item, index) => index.toString()}
          removeClippedSubviews={false}
        />
      </View>
    );
  };

  const renderExercise = (exercise, date) => {
    return (
      <FlatList
        data={exercise.sessions}
        spacing={10}
        renderItem={(item) => (item.item.date === date ? renderSession(item.item) : null)}
        extraData={exercise.sessions}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={false}
      />
    );
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Title style={styles.name}>{moment(props.workout.date).format('DD-MM-YYYY')}</Title>
      <FlatList
        data={props.workout.exercises}
        spacing={10}
        renderItem={(item) => renderExercise(item.item, props.workout.date)}
        extraData={props.workout.exercises}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1abc9c',
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
    color: 'black',
    fontSize: 16,
    fontWeight: '600'
  },
  date: {
    color: '#ccc',
    fontSize: 12,
    fontWeight: '600'
  },
  set: {
    alignItems: 'center'
  }
});

export default ProgressView;
