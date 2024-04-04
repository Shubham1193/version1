import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Signupuserdata = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Flashscreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Signupuserdata;