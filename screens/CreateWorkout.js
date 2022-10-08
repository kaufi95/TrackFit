import React, { useRef, useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Box, Input, Pressable, Text, ScrollView, HStack, Button } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

const CreateWorkout = () => {
  const [textValue, setTextValue] = useState('');
  const [numInputs, setNumInputs] = useState(1);
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

  const scrollViewRef = useRef();

  const inputs = [];

  for (let i = 0; i < numInputs; i++) {
    inputs.push(
      <View key={i} style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
        <HStack style={styles.stack}>
          <Text style={styles.text}>{i + 1}.</Text>
          <Input
            style={styles.input}
            variant="unstyled"
            onChangeText={(value) => setInputValue(i, value)}
            value={refInputs.current[i]}
            placeholder="Exercise"
          />
          <Pressable onPress={() => removeInput(i)}>
            <AntDesign name="minuscircleo" size={20} color="red" />
          </Pressable>
        </HStack>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
      behavior="position"
      enabled
      keyboardVerticalOffset={100}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        <View style={styles.view}>
          <Box style={styles.box}>
            <Input variant="rounded" w="75%" mx="auto" placeholder="Workout name" />
          </Box>
          {inputs}
          <Button variant="rounded" style={styles.button} onPress={addInput}>
            <Text style={styles.buttonText}>Add Exercise</Text>
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  view: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    maxWidth: '80%'
  },
  button: {
    margin: 20,
    backgroundColor: 'cyan'
  },
  text: {
    color: 'black',
    width: 20,
    marginLeft: 15
  },
  buttonText: {
    color: 'white'
  },
  box: {
    margin: 15
  },
  stack: {
    flex: 0.9,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 30,
    padding: 10
  }
});

export default CreateWorkout;
