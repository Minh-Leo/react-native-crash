import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { gs } from '../../../styles';

const Header = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/hilton.png')}
        style={styles.image}
      />
      <View style={styles.topButtons}>
        <AntDesign name='close' size={24} color='#fff' />
        <View style={gs.rowCenter}>
          <AntDesign
            name='save'
            size={24}
            color='#fff'
            style={styles.topButtonRight}
          />
          <AntDesign
            name='sharealt'
            size={24}
            color='#fff'
            style={styles.topButtonRight}
          />
          <Entypo
            name='dots-three-vertical'
            size={18}
            color='#fff'
            style={styles.topButtonRight}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  topButtons: {
    ...gs.rowBetween,
    position: 'absolute',
    top: '10%',
    left: 22,
    right: 22,
  },
  topButtonRight: {
    marginLeft: 12,
  },
});
