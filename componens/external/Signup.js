import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Signupuserdata from './Signupuserdata';
import Signuppreferdata from './Signuppreferdata';
import Signupfilterdata from './Signupfilterdata';

const Stack = createStackNavigator();

const Signup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="userdata" component={Signupuserdata} />
      <Stack.Screen name="preferdata" component={Signuppreferdata} />
      <Stack.Screen name="filterdata" component={Signupfilterdata} />
    </Stack.Navigator>
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

export default Signup;
