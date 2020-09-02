import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import Images from './Images';

export default function App() {
  const [outputText, setOutputText] = useState('Minh');

  return (
    <View style={styles.container}>
      <Images />
      <Text style={styles.text}>{outputText}</Text>
      <Button title='Change text' onPress={() => setOutputText('Hi there')} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d4f22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 55,
  },
});
