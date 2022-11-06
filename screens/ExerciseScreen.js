import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Alert, FlatList, LogBox } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';

import moment from 'moment';

const ExerciseScreen = ({ navigation, route }) => {
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  const [count, setCount] = useState(0);
  const [inputs, setInputs] = useState([{ weight: '', repeats: '' }]);
  const inputRef = useRef(null);

  const verifyIfExerciseIsDone = (exercise) => {
    return exercise.sessions?.some((element) => {
      let date1 = moment(new Date(element.date)).startOf('day');
      let date2 = moment(new Date()).startOf('day');
      return date1.isSame(date2);
    });
  };

  const getLatestSessionOfExercise = (exercise) => {
    return exercise.sessions?.find((element) => {
      let date1 = moment(new Date(element.date)).startOf('day');
      let date2 = moment(new Date()).startOf('day');
      return date1.isSame(date2);
    });
  };

  const prepareInputs = (exercise) => {
    const session = getLatestSessionOfExercise(exercise);
    let inputs = session.sets.map((set) => {
      return { weight: set.weight, repeats: set.repeats };
    });
    inputs.push({ weight: '', repeats: '' });
    setInputs(inputs);
    setCount(session.sets.length);
  };

  useEffect(() => {
    if (verifyIfExerciseIsDone(route.params.exercise)) {
      prepareInputs(route.params.exercise);
    }
    inputRef.current.focus();
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
    inputRef.current.focus();
  };

  const nextSet = () => {
    if (count + 1 === inputs.length) {
      setInputs([...inputs, { weight: '', repeats: '' }]);
    }
    setCount(count + 1);
    inputRef.current.focus();
  };

  const handleSave = () => {
    let sets = [];
    inputs.forEach((input, index) => {
      if (input.weight !== '' && input.repeats !== '') {
        sets.push({
          index: index,
          weight: parseInt(input.weight),
          repeats: parseInt(input.repeats)
        });
      }
    });
    if (sets.length > 0) {
      route.params.updateExercise(route.params.exercise, sets);
      navigation.goBack();
    } else {
      Alert.alert('Error', 'You must enter at least one set');
    }
  };

  const renderSet = (set) => {
    return (
      <View style={styles.lastSets}>
        <Text style={styles.text}>{set.index + 1}. Set</Text>
        <Text style={styles.text}>{set.weight} kg</Text>
        <Text style={styles.text}>{set.repeats} reps</Text>
      </View>
    );
  };

  const header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{moment(route.params.exercise.sessions[0]?.date).format('DD.MM.YYYY')}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled style={styles.kav}>
      <View style={styles.list}>
        <FlatList
          data={route.params.exercise.sessions[0]?.sets}
          renderItem={(item) => renderSet(item.item)}
          ListHeaderComponent={header()}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.view}>
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
              ref={(ref) => (inputRef.current = ref)}
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
      </View>
      <View style={styles.button}>
        <Button
          mode="contained"
          color="#1abc9c"
          style={styles.doneButton}
          onPress={() => {
            handleSave();
          }}
        >
          Done
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  kav: {
    flex: 2,
    justifyContent: 'center'
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    backgroundColor: '#c1eadd',
    flexDirection: 'column',
    height: '30%',
    justifyContent: 'center'
  },
  header: {
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  headerText: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  lastSets: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 20,
    padding: 5
  },
  text: {
    fontSize: 18
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
  doneButton: {
    borderRadius: 10,
    padding: 5,
    width: '50%',
    alignSelf: 'center',
    marginBottom: 150
  }
});

export default ExerciseScreen;
