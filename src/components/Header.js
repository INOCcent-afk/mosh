import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>FUCK EVERYBODY</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 50,
    backgroundColor: '#00f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
});
