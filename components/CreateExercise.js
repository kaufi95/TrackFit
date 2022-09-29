import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Input, HStack, Text, Icon, IconButton, VStack } from 'native-base';

const CreateExercise = () => {
  return (
    <VStack>
      <HStack justifyContent="center">
        <Text justifyContent="center">1.</Text>
        <Input variant="rounded" placeholder="Workout" justifyContent="center" />
        <IconButton
          icon={<Icon as={Entypo} name="emoji-happy" />}
          borderRadius="full"
          _icon={{
            color: 'orange.500',
            size: 'md'
          }}
          _hover={{
            bg: 'orange.600:alpha.20'
          }}
          _pressed={{
            bg: 'orange.600:alpha.20',
            _icon: {
              name: 'emoji-flirt'
            },
            _ios: {
              _icon: {
                size: '2xl'
              }
            }
          }}
          _ios={{
            _icon: {
              size: '2xl'
            }
          }}
        />
      </HStack>

      <HStack justifyContent="center">
        <Text justifyContent="center">1.</Text>
        <Input variant="rounded" placeholder="Workout" justifyContent="center" />
        <IconButton
          icon={<Icon as={Entypo} name="emoji-happy" />}
          borderRadius="full"
          _icon={{
            color: 'orange.500',
            size: 'md'
          }}
          _hover={{
            bg: 'orange.600:alpha.20'
          }}
          _pressed={{
            bg: 'orange.600:alpha.20',
            _icon: {
              name: 'emoji-flirt'
            },
            _ios: {
              _icon: {
                size: '2xl'
              }
            }
          }}
          _ios={{
            _icon: {
              size: '2xl'
            }
          }}
        />
      </HStack>

      <HStack justifyContent="center">
        <Text justifyContent="center">1.</Text>
        <Input variant="rounded" placeholder="Workout" justifyContent="center" />
        <IconButton
          icon={<Icon as={Entypo} name="emoji-happy" />}
          borderRadius="full"
          _icon={{
            color: 'orange.500',
            size: 'md'
          }}
          _hover={{
            bg: 'orange.600:alpha.20'
          }}
          _pressed={{
            bg: 'orange.600:alpha.20',
            _icon: {
              name: 'emoji-flirt'
            },
            _ios: {
              _icon: {
                size: '2xl'
              }
            }
          }}
          _ios={{
            _icon: {
              size: '2xl'
            }
          }}
        />
      </HStack>
    </VStack>
  );
};

export default CreateExercise;
