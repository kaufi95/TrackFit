import React from 'react';
import { StyleSheet } from 'react-native';

import { Pressable, Flex, Text, NativeBaseProvider } from 'native-base';

const WorkoutCard = (props) => {
  return (
    <NativeBaseProvider>
      <Pressable
        onPress={() => props.navigation.navigate('Workout', { workout: props.workout })}
        rounded="8"
        borderColor="coolGray.300"
        maxW="96"
        shadow="5"
        bg="coolGray.100"
        p="10"
      >
        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize={16}>
          {props.workout.name}
        </Text>
        <Flex>
          <Text color="darkBlue.600" mt="2" fontWeight="medium" fontSize={12}>
            {props.workout.lastDate}
          </Text>
        </Flex>
      </Pressable>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default WorkoutCard;
