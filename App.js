/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Button, Linking, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Testing</Text>
      <Button
        title="Tap me!"
        onPress={() => {
          Linking.openURL('https://youtube.com');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
});

export default App;
