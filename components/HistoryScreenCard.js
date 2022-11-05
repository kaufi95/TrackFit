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
    padding: 15
  },
  date: {
    fontSize: 18,
    marginBottom: 5,
    marginLeft: 20
  },
  innerCard: {
    backgroundColor: '#7fd3bc',
    padding: 15,
    borderRadius: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default HistoryScreenCard;
