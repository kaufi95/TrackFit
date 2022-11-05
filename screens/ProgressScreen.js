import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Title } from 'react-native-paper';

import moment from 'moment';

const ProgressScreen = (props) => {
  let sessions = props.route.params.exercise.sessions;
  sessions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const renderSet = (set) => {
    return (
      <View style={styles.set}>
        <Text>{set.index + 1}. Set</Text>
        <Text>{set.weight} kg</Text>
        <Text>{set.repeats} repeats</Text>
      </View>
    );
  };

  const renderSession = (session) => {
    let color;
    if (session.index % 2 === 0) {
      color = '#1abc9c';
    } else {
      color = '#333385';
    }
    return (
      <View style={[styles.session, { backgroundColor: color }]}>
        <Text>{moment(session.item.date).format('DD.MM.YYYY')}</Text>
        <FlatList
          data={session.item.sets}
          spacing={10}
          renderItem={(item) => renderSet(item.item)}
          extraData={session.item.sets}
          keyExtractor={(item, index) => index.toString()}
          removeClippedSubviews={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.view}>
      <Title style={styles.name}>{props.route.params.exercise.name}</Title>
      <FlatList
        data={props.route.params.exercise.sessions}
        spacing={10}
        renderItem={(item) => renderSession(item)}
        extraData={props.route.params.exercise.sessions}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  session: {
    flex: 1,
    alignItems: 'center'
  },
  set: {
    alignItems: 'center'
  }
});

export default ProgressScreen;
