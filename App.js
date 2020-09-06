import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.inputContainer}>
        {/* <Text style={styles.text}>{outputText}</Text> */}
        <TextInput
          style={styles.textInput}
          placeholder='my goals'
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <Button title='ADD' onPress={() => setGoals([...goals, goal])} />
      </View>
      <View style={styles.inputContainer}>
        {goals
          ? goals.map((goal, i) => (
              <Text
                key={i}
                style={styles.text}
                onPress={() => {
                  let newGoals = goals.filter((g) => g !== goal);
                  setGoals(newGoals);
                }}
              >
                {goal}
              </Text>
            ))
          : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
  },
  text: {
    color: '#322',
    fontSize: 55,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 50,
  },
});
