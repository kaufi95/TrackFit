import AsyncStorage from '@react-native-async-storage/async-storage';

import testdata from './TestdataService';

export const loadWorkouts = async () => {
  try {
    let temp = await AsyncStorage.getItem('workouts');
    if (temp !== null) {
      console.log('loaded workouts');
      return JSON.parse(temp);
    } else {
      console.log('no workouts available');
      return [];
    }
  } catch (e) {
    console.error('Failed to load workouts.', e);
  }
};

export const storeWorkout = async (workout) => {
  try {
    let workouts = await loadWorkouts();
    workouts = [workout, ...workouts];

    await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
    console.log('saved workouts');
  } catch (e) {
    console.error('Failed to save workouts.', e);
  }
};

export const removeWorkout = async (workout) => {
  try {
    let workouts = await loadWorkouts();

    const index = workouts.findIndex((element) => element.id === workout.id);

    if (index === -1) {
      console.log('workout not found');
      return workouts;
    }

    workouts.splice(index, 1);
    await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
    console.log('removed workout');
    return workouts;
  } catch (e) {
    console.error('Failed to remove workout.', e);
  }
};

export const clearWorkouts = async () => {
  try {
    await AsyncStorage.setItem('workouts', JSON.stringify([]));
    console.log('cleared workouts');
  } catch (e) {
    console.error('Failed to clear workouts.', e);
  }
};

export const insertTestdata = async () => {
  try {
    await AsyncStorage.setItem('workouts', JSON.stringify(testdata()));
    console.log('saved workouts');
  } catch (e) {
    console.error('Failed to save workouts.', e);
  }
};

export const verifyIfWorkoutNameExists = async (name) => {
  try {
    let workouts = await loadWorkouts();
    let exists = false;
    workouts.forEach((workout) => {
      if (workout.name === name) {
        console.log('workout name already exists');
        exists = true;
      }
    });
    console.log('workout name does not exist');
    return exists;
  } catch (e) {
    console.error('Failed to verify workout name.', e);
  }
};

export const storeSession = async (workout, exercise, sets) => {
  try {
    let workouts = await loadWorkouts();

    const workoutIndex = workouts.findIndex((element) => element.id === workout.id);

    if (workoutIndex === -1) {
      console.log('workout not found');
      return;
    }

    const exerciseIndex = workouts[workoutIndex].exercises.findIndex((element) => element.id === exercise.id);

    if (exerciseIndex === -1) {
      console.log('exercise not found');
      return;
    }

    let session = {
      date: new Date(),
      sets: sets
    };

    workouts[workoutIndex].exercises[exerciseIndex].sessions.push(session);

    await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
    console.log('stored session');
  } catch (e) {
    console.error('Failed to store session.', e);
  }
};
