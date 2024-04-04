import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';

const Flashscreen = ({ navigation }) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      let isAuthenticated = false; 
      if (!isAuthenticated) {
        isAuthenticated = true;
        const destinationScreen = isAuthenticated ? 'main' : 'signin';
        navigation.dispatch(StackActions.replace(destinationScreen));
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
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

export default Flashscreen;
