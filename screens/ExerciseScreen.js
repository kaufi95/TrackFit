import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Alert, LogBox } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';

import moment from 'moment';

const ExerciseScreen = ({ navigation, route }) => {
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  const [count, setCount] = useState(0);
  const [inputs, setInputs] = useState([{ weight: '', repeats: '' }]);

  const verifyIfExerciseIsDone = (exercise) => {
    return exercise.sessions?.some((element) => {
      let date1 = moment(new Date(element.date)).startOf('day');
      let date2 = moment(new Date()).startOf('day');
      return date1.isSame(date2);
    });
  };

  const getLatestSessionofExercise = (exercise) => {
    return exercise.sessions?.find((element) => {
      let date1 = moment(new Date(element.date)).startOf('day');
      let date2 = moment(new Date()).startOf('day');
      return date1.isSame(date2);
    });
  };

  const prepareInputs = (exercise) => {
    const session = getLatestSessionofExercise(exercise);
    setCount(session.sets.length - 1);
    let inputs = [];
    session.sets.map((set) => {
      inputs.push({ weight: set.weight, repeats: set.repeats });
    });
    setInputs(inputs);
  };

  useEffect(() => {
    if (verifyIfExerciseIsDone(route.params.exercise)) {
      prepareInputs(route.params.exercise);
    }
  }, []);

  const handleWeightChange = (value) => {
    const newInputs = [...inputs];
    newInputs[count].weight = value;
    setInputs(newInputs);
  };

  const handleRepeatsChange = (value) => {
    const newInputs = [...inputs];
    newInputs[count].repeats = value;
    setInputs(newInputs);
  };

  const lastSet = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const nextSet = () => {
    if (count + 1 === inputs.length) {
      setInputs([...inputs, { weight: '', repeats: '' }]);
    }
    setCount(count + 1);
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

    console.log(sets);
    route.params.updateExercise(route.params.exercise.name, sets);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled style={styles.kav}>
      <View style={styles.inputs}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Weight</Text>
          <TextInput
            mode="outlined"
            outlineColor="#1abc9c"
            style={styles.textInput}
            onChangeText={(value) => handleWeightChange(value)}
            label={<Icon name="weight-hanging" size={30} style={styles.IconStyle} />}
            keyboardType="numeric"
            value={inputs[count].weight.toString()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Repeats</Text>
          <TextInput
            mode="outlined"
            outlineColor="#1abc9c"
            style={styles.textInput}
            onChangeText={(value) => handleRepeatsChange(value)}
            label={<FeatherIcon name="repeat" size={30} style={styles.IconStyle} />}
            keyboardType="numeric"
            value={inputs[count].repeats.toString()}
          />
        </View>
      </View>

      <View style={styles.navigation}>
        <AntIcon
          name="caretleft"
          color="#59c8ac"
          size={55}
          onPress={() => {
            lastSet();
          }}
        />
        <Text style={styles.set}>{count + 1}. Set</Text>
        <AntIcon
          name="caretright"
          color="#59c8ac"
          size={55}
          onPress={() => {
            nextSet();
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          mode="contained"
          color="#1abc9c"
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
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10
  },
  inputLabel: {
    fontSize: 18,
    color: '#4f4f4f',
    textAlign: 'center'
  },
  textInput: {
    width: '75%',
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
    fontSize: 16,
    fontWeight: '600'
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '600'
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
