import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Header from './components/Header';
import Bookmark from './components/Bookmark';
import { colors } from '../../styles';

const index = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Header />

      <View>
        <Bookmark />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
