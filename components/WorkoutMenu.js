import React from 'react';
import { Pressable, View, Text, Menu, Box, ThreeDotsIcon } from 'native-base';

const WorkoutCard = (props) => {
  return (
    <Menu
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <ThreeDotsIcon />
          </Pressable>
        );
      }}
    >
      <Menu.Item>Edit</Menu.Item>
      <Menu.Item>Delete</Menu.Item>
    </Menu>
  );
};

export default WorkoutCard;
