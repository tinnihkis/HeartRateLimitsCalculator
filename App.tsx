import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [age, setAge] = useState<string>("");
  
  const ageAsNumber: number = !isNaN(Number(age)) && age !== "" ? Number(age): 0;

  const lower: number = (220 - ageAsNumber) * 0.65;
  const upper: number = (220 - ageAsNumber) * 0.85;


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>

      <TextInput
      style={styles.input}
        placeholder="Enter your age"
        keyboardType="number-pad"
        value= {age}
        onChangeText={setAge}
        />

      <Text style={styles.text}>
        Lower limit: {ageAsNumber === 0 ? 0 : lower.toFixed(2)} bpm
      </Text>

      <Text style={styles.text}>
        Upper limit: {ageAsNumber === 0 ? 0 : upper.toFixed(2)} bpm
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8B4E2",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "white",
    width: 180,
    padding: 10,
    borderRadius: 8
  },
  text: {
    fontSize: 18,
    color: "#222222",
    marginVertical: 12
  }
});
