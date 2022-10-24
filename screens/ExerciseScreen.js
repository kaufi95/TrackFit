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
        {flex: 1, flexDirection: "column"}]}>
      <View style={{ flex: 3, backgroundColor: "red" }}>
        {/*Hier kommem die Workouts vom letzten Mal rein*/} 
      </View>

      <View style={{ flex: 2, flexDirection: "column" }}>

        <View style={{ flexDirection: "row", paddingTop: 20}}>

        <View style={{flexDirection: "column", flex: 2}}/>

          <View style={{flexDirection: "column", flex: 4}}>
            <TextInput
              mode="outlined"
              label = <Icon name="weight-hanging" size={30} style={{alignSelf: "center"}} />
            />
          </View>

          <View style={{flexDirection: "column", flex: 2}}/>

          <View style={[styles.TextInputView, { flex: "4"}]}>
            <TextInput
              mode="outlined"
              label = <FeatherIcon name="repeat" size={30} style={{alignSelf: "center"}} />
            />
          </View>

          <View style={{flexDirection: "column", flex: 2}}/>

        </View>

        <View style={{ flexDirection: "row", paddingTop: 20}}>

          <View style={{flexDirection: "column", flex: 2}}/>

          <View style={{flexDirection: "column", flex: 4}}>
            <AntIcon
              name="caretleft"
              size={55}
              onPress={() => {
                console.log("links wurde gedrücken");
              }}
              style={{alignSelf: "center"}}
            />
          </View>

          <View style={{flexDirection: "column", flex: 2}}>
            <Text style={{ marginTop: "auto", marginBottom: "auto", fontSize: 24}}>
              1. Set
            </Text>
          </View>

          <View style={{flexDirection: "column", flex: 4}}>
            <AntIcon
              name="caretright"
              size={55}
              onPress={() => {
                console.log("rechts wurde gedrücken");
              }}
              style={{ alignSelf: "center" }}
            />
          </View>

          <View style={{flexDirection: "column", flex: 2}}/>
          
        </View>

        <View style={{flexDirection: "row", alignSelf: "center"}}>

          <View style={{flexDirection: "column"}}>
            <Button mode="contained" style={{alignSelf: "center", justifyContent: "center", borderRadius: 10, padding: 10, marginTop: 20}}>
              Finish Exercise
            </Button>
          </View>
          
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({

});

export default ExerciseScreen;


