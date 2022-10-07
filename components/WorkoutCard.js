import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Pressable, Box, Flex, Center, NativeBaseProvider } from 'native-base';

const WorkoutCard = (props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box alignItems="center">
          <Pressable
            onPress={() => props.navigation.navigate('Workout', {workout: props.workout})}
            rounded="8"
            borderColor="coolGray.300"
            maxW="96"
            shadow="3"
            bg="coolGray.100"
            p="10"
          >
            <Box>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                {props.workout.name}
              </Text>
              <Flex>
                <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                  {props.workout.lastDate}
                </Text>
              </Flex>
            </Box>
          </Pressable>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});

export default WorkoutCard;
