import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Title } from 'react-native-paper';

import moment from 'moment';

const HistoryDetailView = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Title style={styles.name}>{moment(props.workout.date).format('DD-MM-YYYY')}</Title>
      <FlatList
        data={props.exercises}
        spacing={10}
        renderItem={(item) => renderExercise(item.item, props.workout.date)}
        extraData={props.exercises}
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

export default HistoryDetailView;
