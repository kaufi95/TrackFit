import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { IconButton, Menu } from 'react-native-paper';

import { removeWorkout } from '../scripts/storage';

const WorkoutMenu = (props) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.view}>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={<IconButton icon="dots-horizontal" size={25} onPress={() => setVisible(true)} />}
      >
        {/* <Menu.Item onPress={() => setVisible(false)} title="Edit" /> */}
        <Menu.Item
          onPress={() =>
            Alert.alert('Delete', 'Are you sure you want to delete this Workout?', [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              {
                text: 'DELETE IT!',
                onPress: () => {
                  props.deleteWorkout(props.workout);
                }
              }
            ])
          }
          title="Delete"
        />
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignSelf: 'flex-end'
  }
});

export default WorkoutMenu;
