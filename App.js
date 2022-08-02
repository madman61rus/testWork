import React, {useState, useCallback} from 'react';
import {View, StyleSheet, StatusBar, SafeAreaView} from 'react-native';

import Header from './components/Header';
import Modal from './components/Modal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleComplete = useCallback(() => setModalVisible(false), []);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        translucent
        backgroundColor="#000"
        barStyle="dark-content"
        animated={true}
      />
      <Header />
      <Modal visible={modalVisible} onComplete={handleComplete} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#adb6c4',
  },
});

export default App;
