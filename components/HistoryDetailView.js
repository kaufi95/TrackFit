import React from 'react';
import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import { Title } from 'react-native-paper';

const HistoryDetailView = (props) => {
  const renderSet = (set) => {
    return (
      <View style={styles.set}>
        <Text style={styles.text}>{set.index + 1}. Set</Text>
        <Text style={styles.text}>{set.weight} kg</Text>
        <Text style={styles.text}>{set.repeats} repeats</Text>
      </View>
    );
  };

  let color;
  if (props.index % 2 === 0) {
    color = '#e0f4ee';
  } else {
    color = '#a2decc';
  }

  return (
    <Pressable
      style={[styles.view, { backgroundColor: color }]}
      onPress={() => props.navigation.navigate('Progress', { workout: props.workout, exercise: props.exercise })}
    >
      <Title style={styles.name}>{props.exercise.name}</Title>
      <FlatList
        data={props.exercise.sets}
        spacing={10}
        renderItem={(item) => renderSet(item.item)}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    padding: 5
  },
  set: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 20,
    padding: 5
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 30
  },
  text: {
    fontSize: 18
  }
});

export default HistoryDetailView;
