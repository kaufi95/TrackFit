import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { FlatGrid } from 'react-native-super-grid';
import AnimatedLoader from 'react-native-animated-loader';

import WorkoutCard from '../components/WorkoutCard';
import { loadWorkouts } from '../scripts/storage';

const HomeScreen = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
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
      if (workouts != null && workouts.length > 0) {
        return (
          <FlatGrid
            itemDimension={150}
            data={workouts}
            style={styles.gridView}
            spacing={10}
            renderItem={({ item }) => <WorkoutCard workout={item} navigation={navigation} />}
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default HomeScreen;
