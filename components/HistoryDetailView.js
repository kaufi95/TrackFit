import React from 'react';
import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import { Title } from 'react-native-paper';

const HistoryDetailView = (props) => {
  const renderSet = (set) => {
    return (
      <View style={styles.set}>
        <Text>{set.index + 1}. Set</Text>
        <Text>{set.weight} kg</Text>
        <Text>{set.repeats} repeats</Text>
      </View>
    );
  };

  return (
    <Pressable
      style={{ alignItems: 'center' }}
      onPress={() => props.navigation.navigate('Progress', { exercise: props.exercise })}
    >
      <Title style={styles.name}>{props.exercise.name}</Title>
      <FlatList
        data={props.exercise.sessions[0].sets}
        spacing={10}
        renderItem={(item) => renderSet(item.item)}
        extraData={props.exercise.sessions[0].sets}
        keyExtractor={(item, index) => item + index.toString()}
        removeClippedSubviews={false}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1abc9c',
    borderRadius: 5,
    padding: 5
  },
  set: {
    alignItems: 'center'
  }
});

export default HistoryDetailView;
