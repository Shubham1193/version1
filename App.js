import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from "./componens/external/Signin"
import Signup from "./componens/external/Signup"
import Flashscreen from "./componens/external/Flashscreen"
import Main from "./componens/external/Main"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator styles={styles.container} initialRouteName='flashscreen'>
        <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }}/>
        <Stack.Screen name="main" component={Main} options={{ headerShown: false }}/>
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="flashscreen" component={Flashscreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});