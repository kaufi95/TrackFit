import React, { useRef, useEffect, useState } from 'react';
import { TextInput, View, StyleSheet, KeyboardAvoidingView, Alert, Platform, FlatList } from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper';

import uuid from 'react-native-uuid';

import { storeWorkout, loadWorkouts, verifyIfWorkoutNameExists } from '../scripts/storage';

const CreateWorkout = ({ navigation }) => {
  const [workoutName, setWorkoutName] = useState('');
  const [inputs, setInputs] = useState(['', '', '']);

  const setInputValue = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const removeInput = (i) => {
    if (inputs.length > 1) {
      inputs.splice(i, 1);
      setInputs([...inputs]);
    }
  };

  const addInput = () => {
    setInputs([...inputs, '']);
  };

  const saveWorkout = async () => {
    if (await verifyIfWorkoutNameExists(workoutName)) {
      Alert.alert('Failed to store Workout', 'Workout name already exists');
      return;
    }

    let exercises = [];

    inputs.map((item) => {
      if (item != '') {
        exercises.push({
          name: item,
          sessions: []
        });
      }
    });

    let workout = {
      id: uuid.v4(),
      name: workoutName,
      exercises: exercises
    };

    if (workout.name == '') {
      Alert.alert('Error while saving workout', 'Please enter a name');
      return;
    }

    if (workout.exercises.length == 0) {
      Alert.alert('Error while saving workout', 'Please add an exercise');
      return;
    }

    console.log(workout);
    storeWorkout(workout).then(() => {
      navigation.popToTop();
    });
  };

  const inputExercise = (item) => {
    return (
      <View key={item.index} style={styles.stack}>
        <Text style={styles.text}>{item.index + 1}.</Text>
        <TextInput
          style={styles.inputExercise}
          onChangeText={(value) => setInputValue(item.index, value)}
          value={inputs[item.index]}
          placeholder="Exercise"
        />
        <IconButton icon="minus-circle-outline" size={25} color="red" onPress={() => removeInput(item.index)} />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.kav}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS == 'ios' ? '75' : '135'}
      enabled
    >
      <View style={styles.viewHeader}>
        <TextInput
          autoFocus={true}
          style={styles.inputHeader}
          placeholder="Workout name"
          onChangeText={(value) => {
            setWorkoutName(value);
          }}
        />
      </View>
      <FlatList
        data={inputs}
        spacing={10}
        renderItem={(index) => inputExercise(index)}
        extraData={inputs}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={false}
      />
      <View style={styles.viewFooter}>
        <Button style={styles.button} onPress={addInput}>
          Add Exercise
        </Button>
        <Button style={styles.button} onPress={saveWorkout}>
          Save workout
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  kav: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  viewHeader: {
    alignItems: 'center',
    marginTop: 10
  },
  viewFooter: {
    alignItems: 'center',
    padding: 5
  },
  inputExercise: {
    width: '75%'
  },
  inputHeader: {
    width: '80%',
    height: 50,
    padding: 10,
    fontSize: 25
  },
  button: {
    width: '80%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 25
  },
  text: {
    color: 'black',
    width: 30,
    marginLeft: 15
  },
  stack: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 30,
    padding: 5,
    margin: 10
  }
});

export default CreateWorkout;
