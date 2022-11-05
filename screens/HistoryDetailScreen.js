import React from 'react';

import HistoryDetailView from '../components/HistoryDetailView';

const HistoryDetailScreen = (props) => {
  return (
    <View>
      <Text>{props.route.params.item.date}</Text>
      <Text>{props.route.params.item.workoutName}</Text>
      {props.route.params.item.exercises.map((exercise) => {
        return <HistoryDetailView exercise={exercise} />;
      })}
    </View>
  );
};

export default HistoryDetailScreen;
