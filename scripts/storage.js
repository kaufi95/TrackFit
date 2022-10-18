import AsyncStorage from '@react-native-async-storage/async-storage';

import testdata from './testdata';

export const loadWorkouts = async () => {
  try {
    let temp = await AsyncStorage.getItem('workouts');
    if (temp !== null) {
      console.log('loaded workouts');
      return JSON.parse(temp);
    } else {
      console.log('no workouts available');
    }
  } catch (e) {
    console.error('Failed to load workouts.', e);
  }
};

export const storeWorkout = async (workout) => {
  try {
    let workouts = await loadWorkouts();
    workouts = [workout, ...workouts];

    // uncomment to empty workouts
    // workouts = [];

    // uncomment to activate testdata
    // workouts = testdata();

    await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
    console.log('saved workouts');
  } catch (e) {
    console.error('Failed to save workouts.', e);
  }
};

export const removeWorkout = async (workout) => {
  try {
    let workouts = await loadWorkouts();
    console.log(workouts);
    console.log(workout);

    const index = workouts.findIndex((element) => element.id === workout.id);
    console.log(index);

    if (index === -1) {
      console.log('workout not found');
      return;
    }

    workouts.splice(index, 1);
    await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
    console.log('removed workout');
  } catch (e) {
    console.error('Failed to remove workout.', e);
  }
};
