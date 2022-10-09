import AsyncStorage from '@react-native-async-storage/async-storage';

import testdata from './testdata';

export const load = async () => {
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

export const save = async (workout) => {
  try {
    let workouts = await load();
    if (workout != null) workouts.push(workout);

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
