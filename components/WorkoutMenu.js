import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { IconButton, Menu } from 'react-native-paper';

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
            Alert.alert('Delete', `Are you sure you want to delete ${props.workout.name}?`, [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              {
                text: 'Delete!',
                onPress: () => {
                  props.deleteWorkout(props.workout);
                  setVisible(false);
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
