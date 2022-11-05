import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import HistoryDetailView from '../components/HistoryDetailView';

const HistoryDetailScreen = (props) => {
  return (
    <View>
      <Text>{props.route.params.date}</Text>
      <Text>{props.route.params.workoutName}</Text>
      {props.route.params.exercises.map((exercise) => {
        return <HistoryDetailView exercise={exercise} navigation={props.navigation} />;
      })}
    </View>
  );
};

export default HistoryDetailScreen;
