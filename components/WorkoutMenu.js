import React from 'react';
import { Alert } from 'react-native';
import { Pressable, Text, Menu, ThreeDotsIcon } from 'native-base';

import uuid from 'react-native-uuid';

import { removeWorkout } from '../scripts/storage';

const WorkoutCard = (props) => {
  return (
    <Menu
      trigger={(triggerProps) => {
        return (
          <Pressable {...triggerProps}>
            <ThreeDotsIcon size={8} />
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

export default WorkoutCard;
