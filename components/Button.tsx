import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface ButtonProps {
  onPress: () => void;
}

const ModalComponent = ({onPress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.container}>
            <Text style={styles.title}>Collect</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  button: {
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
    flexDirection: 'row',
    borderRadius: 24,
    alignItems: 'center',
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2b9348',
  }
});

export default ModalComponent;