import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Images = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://media2.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif',
        }}
        style={styles.image}
      />
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    borderRadius: 35,
  },
});
