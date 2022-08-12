import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Modal from 'react-native-modal';
import Button from './Button';
import Coin from './Coin';

const { height: WINDOW_HEIGHT } = Dimensions.get('window');

interface ModalProps {
  visible: boolean;
  onComplete: () => void;
}

function getUniqueID() {
  return Math.floor(Math.random() * Date.now()).toString();
}

const ModalComponent = ({ visible, onComplete }: ModalProps) => {
  const [coins, setCoins] = useState<{ id: string }[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const setCounterText = async (): Promise<void> => {
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => {
      setCounter(() => index);
    });
  };

  const handleButtonPress = async () => {
    setCounterText();
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index: number) => {
      setCoins(coins => [...coins, { id: getUniqueID(), index }]);
    });
    setTimeout(() => {
      setCoins([]);
      setCounter(0);
      onComplete();
    }, 2000)
  };



  return (
    <Modal isVisible={visible} style={styles.modal}>
      <View style={styles.container}>
        {coins.map(({ index }: { index: number }) => {
          return <Coin key={`${index}-${Math.random()}`} index={index} onComplete={handleComplete} />;
        })}
        <View
          style={StyleSheet.flatten([styles.count, { top: WINDOW_HEIGHT / 2 }])}>
          <View style={styles.coin} />
          <Text>{`+${counter}`}</Text>
        </View>
        <Button onPress={handleButtonPress} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  container: {
    width: '100%',
    height: '120%',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  count: {
    position: 'absolute',
    width: 100,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  coin: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'red',
    marginRight: 16,
  },
});

export default ModalComponent;
