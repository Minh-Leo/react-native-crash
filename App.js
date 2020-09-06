import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Mih here');

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.inputContainer}>
        <Text style={styles.text}>{outputText}</Text>
        <TextInput style={styles.textInput} placeholder='my goals' />
        <Button title='ADD' onPress={() => setOutputText('Hi there!!!')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
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
