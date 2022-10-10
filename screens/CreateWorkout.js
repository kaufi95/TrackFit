import React, { useRef, useState } from 'react';
import { TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import { Input, Text, ScrollView, HStack, Button } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

import { saveWorkout } from '../scripts/storage';

const CreateWorkout = ({ navigation }) => {
  const [name, setName] = useState('');
  const [textValue, setTextValue] = useState('');
  const [numInputs, setNumInputs] = useState(3);
  const refInputs = useRef([textValue]);

  const setInputValue = (index, value) => {
    const inputs = refInputs.current;
    inputs[index] = value;
    setTextValue(value);
  };

  const removeInput = (i) => {
    refInputs.current.splice(i, 1)[0];
    setNumInputs((value) => value - 1);
  };

  const addInput = () => {
    refInputs.current.push('');
    setNumInputs((value) => value + 1);
  };

  const addWorkout = () => {
    let exercises = {};
    for (let i = 0; i < inputs.length; i++) {
      exercises[i] = refInputs.current[i];
    }

    let workout = {
      name: name,
      lastDate: new Date().toLocaleDateString('de-AT', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      exercises: exercises
    };

    if (workout.name != '' && workout.exercises[0] != '') {
      console.log(workout);
      saveWorkout(workout);
      navigation.navigate('Home');
    } else {
      Alert.alert('Error while saving workout', 'Enter a name or add an exercise');
    }
  };

  const scrollViewRef = useRef();

  const inputs = [];

  for (let i = 0; i < numInputs; i++) {
    inputs.push(
      <HStack key={i} style={styles.stack}>
        <Text style={styles.text}>{i + 1}.</Text>
        <Input
          variant="unstyled"
          size="mg"
          style={styles.input}
          onChangeText={(value) => setInputValue(i, value)}
          value={refInputs.current[i]}
          placeholder="Exercise"
        />
        <TouchableOpacity style={styles.icon} onPress={() => removeInput(i)}>
          <AntDesign name="minuscircleo" size={20} color="red" />
        </TouchableOpacity>
      </HStack>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
      behavior="padding"
      enabled
      keyboardVerticalOffset="100"
    >
      <Input
        variant="rounded"
        size="2xl"
        style={styles.header}
        placeholder="Workout name"
        onChangeText={(value) => setName(value)}
      />
      <ScrollView
        contentContainerStyle={styles.view}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {inputs}
        <HStack>
          <Button variant="rounded" style={styles.button} onPress={addInput}>
            Add Exercise
          </Button>
          <Button variant="rounded" style={styles.button} onPress={addWorkout}>
            Save Workout
          </Button>
        </HStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center'
  },
  input: {
    width: '70%',
    maxWidth: '70%'
  },
  header: {
    width: '80%',
    height: 50,
    padding: 20
  },
  button: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'cyan',
    marginBottom: 50
  },
  text: {
    color: 'black',
    width: 30,
    marginLeft: 15
  },
  box: {
    margin: 15
  },
  icon: {
    width: 30,
    marginLeft: 15,
    marginRight: 5
  },
  stack: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 30,
    padding: 10,
    margin: 10
  }
});

export default CreateWorkout;
