import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert, Platform, FlatList } from 'react-native';
import { Input, Text, HStack, Button } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

import { storeWorkout } from '../scripts/storage';

const CreateWorkout = ({ navigation }) => {
  let name = '';
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

  const setHeader = () => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => saveWorkout()} title="Add" color={'white'}>
          Save
        </Button>
      )
    });
  };

  const saveWorkout = () => {
    let exercises = {};
    for (let i = 0; i < refInputs.current.length; i++) {
      exercises[refInputs.current[i]] = {};
    }

    let workout = {
      name: name,
      lastDate: new Date().toLocaleDateString('de-AT', { year: 'numeric', month: '2-digit', day: '2-digit' }),
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
    storeWorkout(workout);
    navigation.navigate('Home');
  };

  const input = (item) => {
    return (
      <HStack key={item.index} style={styles.stack}>
        <Text style={styles.text}>{item.index + 1}.</Text>
        <Input
          variant="unstyled"
          size="mg"
          style={styles.input}
          onChangeText={(value) => setInputValue(item.index, value)}
          placeholder="Exercise"
        />
        <TouchableOpacity style={styles.icon} onPress={() => removeInput(item.index)}>
          <AntDesign name="minuscircleo" size={20} color="red" />
        </TouchableOpacity>
      </HStack>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.kav}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset="50"
      enabled
    >
      <View style={styles.view}>
        <Input
          variant="rounded"
          size="2xl"
          style={styles.header}
          placeholder="Workout name"
          onChangeText={(value) => {
            name = value;
            setHeader();
          }}
        />
      </View>
      {/* <ScrollView
        contentContainerStyle={styles.view}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      > */}
      <FlatList
        data={refInputs.current}
        spacing={10}
        renderItem={(index) => input(index)}
        extraData={refInputs.current}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button variant="rounded" style={styles.button} onPress={addInput}>
        Add Exercise
      </Button>
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  kav: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  view: {
    alignItems: 'center',
    padding: 10
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
