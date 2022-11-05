import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import HistoryDetailView from '../components/HistoryDetailView';

const HistoryDetailScreen = (props) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setExercises(props.route.params.exercises);
  }, []);

  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Text style={styles.date}>{props.route.params.date}</Text>
        <Text style={styles.name}>{props.route.params.workoutName}</Text>
      </View>
      <FlatList
        style={styles.list}
        data={exercises}
        spacing={10}
        renderItem={(item) => (
          <HistoryDetailView exercise={item.item} index={item.index} navigation={props.navigation} />
        )}
        extraData={exercises}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    width: '65%'
  },
  exercises: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  list: {}
});

export default HistoryDetailScreen;
