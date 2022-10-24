import React, { useRef, useState } from 'react';
import { TextInput, View, StyleSheet, KeyboardAvoidingView, Alert, Platform, FlatList } from 'react-native';
import { Text, Button, IconButton } from 'react-native-paper';

import uuid from 'react-native-uuid';

import { storeWorkout } from '../scripts/storage';

const CreateWorkout = ({ navigation }) => {
  const nameRef = useRef('');
  const [numInputs, setNumInputs] = useState(3);
  const refInputs = useRef(['', '', '']);

  const setInputValue = (index, value) => {
    refInputs.current[index] = value;
    setNumInputs((value) => value);
    console.log(refInputs.current);
  };

  const removeInput = (i) => {
    if (numInputs > 1) {
      refInputs.current.splice(i, 1);
      setNumInputs((value) => value - 1);
    }
  };

  const addInput = () => {
    refInputs.current.push('');
    setNumInputs((value) => value + 1);
  };

  const setHeader = () => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => saveWorkout()} title="Add">
          Save
        </Button>
      )
    });
  };

  const saveWorkout = () => {
    let exercises = [];

    refInputs.current.map((item) => {
      if (item != '') {
        exercises.push({
          name: item,
          sessions: []
        });
      }
    });

    let workout = {
      id: uuid.v4(),
      name: nameRef.current,
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
          value={refInputs.current[item.index]}
          placeholder="Exercise"
        />
        {console.log(refInputs.current[item.index])}
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
          // autoFocus={true}rr
          style={styles.inputHeader}
          placeholder="Workout name"
          onChangeText={(value) => {
            nameRef.current = value;
            setHeader();
          }}
        />
      </View>
      <FlatList
        data={refInputs.current}
        spacing={10}
        renderItem={(index) => inputExercise(index)}
        extraData={refInputs.current}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews={false}
      />
      <View style={styles.viewFooter}>
        <Button style={styles.button} onPress={addInput}>
          Add Exercise
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
