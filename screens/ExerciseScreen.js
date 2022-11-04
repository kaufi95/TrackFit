import React, { useEffect, useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';

import { storeSession } from '../scripts/storage';

const ExerciseScreen = ({ navigation, route }) => {
  const [count, setCount] = useState(1);
  const [inputs, setInputs] = useState([{ weight: '', repeats: '' }]);

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: () => {
  //       return (
  //         <View style={styles.header}>
  //           <Text style={styles.workoutName}>{route.params.workout.name}</Text>
  //           <Text style={styles.exerciseName}>{route.params.exercise.name}</Text>
  //         </View>
  //       );
  //     }
  //     // headerBackTitle: route.params.workout.name
  //   });
  // }, []);

  useEffect(() => {
    console.log('------------------------------');
    console.log(inputs);
  }, [inputs]);

  // useEffect(() => {
  //   inputs.forEach((input) => {
  //     if (isNaN(input)) {
  //       Alert.alert('Please enter a number');
  //     }
  //   });
  // }, [inputs]);

  const handleWeightChange = (value) => {
    const newInputs = [...inputs];
    newInputs[count - 1].weight = value;
    setInputs(newInputs);
  };

  const handleRepsChange = (value) => {
    const newInputs = [...inputs];
    newInputs[count - 1].repeats = value;
    setInputs(newInputs);
  };

  const lastSet = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const nextSet = () => {
    setCount(count + 1);
    if (count === inputs.length) {
      setInputs([...inputs, { weight: '', repeats: '' }]);
    }
  };

  const handleSave = () => {
    let error;
    inputs.forEach((input) => {
      if (isNaN(input.weight) || isNaN(input.repeats)) {
        error = true;
      }
      if (input.weight === '' || input.repeats === '') {
        error = true;
      }
    });

    if (error) {
      Alert.alert('Please verify your inputs');
      return;
    }

    let sets = [];
    inputs.forEach((input, index) => {
      sets.push({
        index: index,
        weight: parseInt(input.weight),
        repeats: parseInt(input.repeats)
      });
    });

    storeSession(route.params.workout, route.params.exercise, sets);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled style={styles.kav}>
      <View style={styles.inputs}>
        <TextInput
          mode="outlined"
          style={styles.textInput}
          onChangeText={(value) => handleWeightChange(value, 0)}
          label={<Icon name="weight-hanging" size={30} style={styles.IconStyle} />}
          keyboardType="numeric"
        />
        <TextInput
          mode="outlined"
          style={styles.textInput}
          onChangeText={(value) => handleRepsChange(value, 1)}
          label={<FeatherIcon name="repeat" size={30} style={styles.IconStyle} />}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.navigation}>
        <AntIcon
          name="caretleft"
          size={55}
          onPress={() => {
            lastSet();
          }}
        />
        <Text style={styles.set}>{count}. Set</Text>
        <AntIcon
          name="caretright"
          size={55}
          onPress={() => {
            nextSet();
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          mode="contained"
          style={styles.finishButton}
          onPress={() => {
            handleSave();
          }}
        >
          Finish Exercise
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  kav: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputs: {
    flexDirection: 'row',
    margin: 10
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  header: {
    alignItems: 'center'
  },
  workoutName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  exerciseName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600'
  },
  textInput: {
    width: '33%',
    margin: 10
  },
  set: {
    fontSize: 24,
    fontWeight: '600',
    width: '25%',
    textAlign: 'center'
  },
  IconStyle: {
    alignSelf: 'center'
  },
  finishButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 20
  }
});

export default ExerciseScreen;
