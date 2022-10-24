import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntIcon from "react-native-vector-icons/AntDesign";

const ExerciseScreen = (props) => {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    setExercise(props.route.params.exercise);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
      style={[
        styles.container,
        {
          // Try setting flexDirection to "row".
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 3, backgroundColor: "red" }}>
        <Text>irgendwas</Text>
      </View>

      <View style={{ flex: 2, flexDirection: "column" }}>

        <View style={{ flexDirection: "row" }}>

          <View style={styles.IconStyleView} />
            <View style={styles.IconStyleView}>
              <Icon name="weight-hanging" size={30} style={styles.IconStyle} />
            </View>
            <View style={styles.TextInputView}>
              <FeatherIcon name="repeat" size={30} style={styles.IconStyle} />
            </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={ {flex: 1}}>
            <Text style={{ marginTop: "auto", marginBottom: "auto", marginLeft: 10 }}>
              1. Set
            </Text>
          </View>

          <View style={styles.TextInputView}>
            <TextInput style={styles.TextInput} placeholder="Weight" />
          </View>

          <View style={[styles.TextInputView, {alignItems: "flex-start"}]}>
            <TextInput style={styles.TextInput} placeholder="Reps" />
          </View>
        </View>

        <View
          style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}
        >
          <AntIcon
            name="caretleft"
            size={55}
            onPress={() => {
              console.log("links wurde gedrücken");
            }}
            style={{ marginRight: 15 }}
          />
          <AntIcon
            name="caretright"
            size={55}
            onPress={() => {
              console.log("rechts wurde gedrücken");
            }}
            style={{ marginLeft: 15 }}
          />
        </View>

        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Button mode="contained" style={styles.Button}>
            Finish Exercise
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextInputView: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
  },

  IconStyleView:{
    flex: 4,
    flexDirection: "column",
    alignItems: "flex-start"
   
  },

  TextInput: {
    width: 100,
    borderWidth: 1,
    marginBottom: "auto",
    marginTop: 10,
  },
  IconStyle: {
    alignItems: "flex-start",
    marginTop: 10,
  },
  Button: {
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    marginTop: 35,
  },
});

export default ExerciseScreen;
