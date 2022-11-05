import React from 'react';
import { StyleSheet, View, Text, Pressable, FlatList } from 'react-native';

const HistoryScreenCard = (props) => {
  return (
    <View style={styles.card}>
      <Pressable
        style={styles.innerCard}
        onPress={() => {
          props.navigation.navigate('History Detail', {
            date: props.item.date,
            workoutName: props.item.workoutName,
            exercises: props.item.exercises
          });
        }}
        key={props.item.workoutName + props.item.date}
      >
        <Text style={styles.name}>{props.item.workoutName}</Text>
        <FlatList
          data={props.item.exercises}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item, index) => item + index.toString()}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#7fd3bc',
    padding: 15,
    borderRadius: 10,
    margin: 15,
    minHeight: 80,
    marginBottom: 30
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  exercises: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  exercise: {
    fontSize: 16
  }
});

export default HistoryScreenCard;
