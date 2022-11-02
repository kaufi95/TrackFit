import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import moment from 'moment';

const HistoryScreenCard = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.date}>{moment(props.card.date).format('DD.MM.YYYY')}</Text>
      <Pressable
        style={styles.innerCard}
        onPress={() => {
          props.navigation.navigate('Progress', { workout: props.card });
        }}
      >
        <Text style={styles.name}>{props.card.name}</Text>
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
