import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkoutScreen = (props) => {
  return (
    <View style={styles.containerView}>
      {console.log(props)}
      <Text>Test WorkoutScreen</Text>
      <Text>{props.route.params.workout.name}</Text>
      <Text>{props.route.params.workout.lastDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default WorkoutScreen;
