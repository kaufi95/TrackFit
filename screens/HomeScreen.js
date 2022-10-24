import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Title } from 'react-native-paper';

import { FlatGrid } from 'react-native-super-grid';
import AnimatedLoader from 'react-native-animated-loader';

import WorkoutCard from '../components/WorkoutCard';
import { loadWorkouts, removeWorkout } from '../scripts/storage';

const HomeScreen = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Title style={styles.text} onLongPress={() => navigation.navigate('Settings')}>
          Home
        </Title>
      ),
      headerLeft: () => <Button onPress={() => navigation.navigate('History')} title="History" />,
      headerRight: () => <Button onPress={() => navigation.navigate('Create a Workout')} title="Add" />
    });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadWorkouts().then((workouts) => {
        setWorkouts(workouts);
        setIsLoading(false);
      });
    }, [])
  );

  const deleteWorkout = (workout) => {
    removeWorkout(workout).then(() => {
      loadWorkouts().then((workouts) => {
        setWorkouts(workouts);
      });
    });
  };

  const renderWorkouts = () => {
    if (isLoading) {
      return (
        <AnimatedLoader
          visible={true}
          overlayColor="rgba(255,255,255,0.75)"
          source={require('../assets/loader.json')}
          animationStyle={styles.lottie}
          speed={1}
        >
          <Text>Loading content...</Text>
        </AnimatedLoader>
      );
    } else {
      if (workouts.length > 0) {
        return (
          <FlatGrid
            itemDimension={150}
            data={workouts}
            style={styles.gridView}
            spacing={10}
            renderItem={({ item }) => (
              <WorkoutCard workout={item} navigation={navigation} deleteWorkout={deleteWorkout} />
            )}
            extraData={workouts}
          />
        );
      } else {
        return (
          <View style={styles.container}>
            <Text>No workouts added yet.</Text>
            <Button onPress={() => navigation.navigate('Create a Workout')} title="Add your first workout" />
          </View>
        );
      }
    }
  };

  return renderWorkouts();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lottie: {
    width: 150,
    height: 150
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default HomeScreen;
