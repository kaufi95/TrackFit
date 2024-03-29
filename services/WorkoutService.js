import AsyncStorage from '@react-native-async-storage/async-storage';

import moment from 'moment';

export const loadWorkouts = async () => {
  try {
    let temp = await AsyncStorage.getItem('workouts');
    if (temp !== null) {
      console.log('loaded workouts');
      return JSON.parse(temp).filter((workout) => !workout.disabled);
    } else {
      console.log('no workouts available');
      return [];
    }
  } catch (e) {
    console.error('Failed to load workouts.', e);
  }
};

export const loadWorkoutsForHistory = async () => {
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

    AsyncStorage.setItem('workouts', JSON.stringify(workouts));
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
    AsyncStorage.setItem('workouts', JSON.stringify(workouts));
    console.log('removed workout');
    return workouts;
  } catch (e) {
    console.error('Failed to remove workout.', e);
  }
};

export const disableWorkout = async (workout) => {
  try {
    let workouts = await loadWorkouts();

    const index = workouts.findIndex((element) => element.id === workout.id);

    if (index === -1) {
      console.log('workout not found');
      return workouts;
    }

    workouts[index].disabled = true;
    AsyncStorage.setItem('workouts', JSON.stringify(workouts));
    workouts.splice(index, 1);
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
      date: moment(new Date()).startOf('day'),
      sets: sets
    };

    workouts[workoutIndex].exercises[exerciseIndex].sessions.push(session);

    await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
    console.log('stored session');
  } catch (e) {
    console.error('Failed to store session.', e);
  }
};

export const updateWorkout = async (workout) => {
  try {
    let workouts = await loadWorkouts();

    const index = workouts.findIndex((element) => element.id === workout.id);

    if (index === -1) {
      console.log('workout not found');
      return;
    }

    workouts[index] = workout;

    await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
    console.log('updated workout');
  } catch (e) {
    console.error('Failed to update workout.', e);
  }
};

export const getExercisesFromWorkout = async (workout) => {
  try {
    let workouts = await loadWorkouts();

    const index = workouts.findIndex((element) => element.id === workout.id);

    if (index === -1) {
      console.log('workout not found');
      return;
    }

    return workouts[index].exercises;
  } catch (e) {
    console.error('Failed to update workout.', e);
  }
};

export const getLastestDateOfWorkout = (workout) => {
  let lastestDate;
  workout.exercises.forEach((exercise) => {
    exercise.sessions?.forEach((session) => {
      if (lastestDate === undefined || lastestDate < moment(session.date)) {
        lastestDate = moment(session.date);
      }
    });
  });
  return lastestDate ? moment(lastestDate) : undefined;
};

export const getDatesOfAllWorkouts = (workouts) => {
  let dates = [];
  workouts.forEach((workout) => {
    workout.exercises.forEach((exercise) => {
      exercise.sessions.forEach((session) => {
        let date = moment(new Date(session.date)).startOf('day');
        if (!dates.some((element) => element.isSame(date))) {
          dates.push(date);
        }
      });
    });
  });
  dates.sort((a, b) => a.isBefore(b));
  return dates;
};

export const getDatesOfWorkout = (workout) => {
  let dates = [];
  workout.exercises.forEach((exercise) => {
    exercise.sessions?.forEach((session) => {
      dates.push(session.date);
    });
  });
  return dates;
};
