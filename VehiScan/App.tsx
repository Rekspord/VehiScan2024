import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './android/app/src/screens/MainScreen'; // Adjust the path as needed
import AuthPage from './android/app/src/screens/AuthPage';
import LoginScreen from './android/app/src/screens/LoginScreen';
import RegistrationScreen from './android/app/src/screens/RegistrationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegistrationScreen">
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

