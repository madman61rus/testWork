import React from 'react';
import { View, StyleSheet } from 'react-native';

const Header = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: '50%',
    height: 70,
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
});

export default Header;
