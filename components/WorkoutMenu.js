import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Pressable, Text, Menu, ThreeDotsIcon } from 'native-base';

import { removeWorkout } from '../scripts/storage';

const WorkoutCard = (props) => {
  return (
    <Menu
      trigger={(triggerProps) => {
        return (
          <Pressable {...triggerProps}>
            <Text style={styles.text}>. . .</Text>
          </Pressable>
        );
      }}
    >
      <Menu.Item>
        <Text>Edit</Text>
      </Menu.Item>
      <Menu.Item
        onPress={() =>
          Alert.alert('Delete', 'Are you sure you want to delete this Workout?', [
            {
              text: 'Cancel',
              style: 'cancel'
            },
            { text: 'DELETE IT!', onPress: () => removeWorkout(props.workout) }
          ])
        }
      >
        Delete
      </Menu.Item>
    </Menu>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default WorkoutCard;
