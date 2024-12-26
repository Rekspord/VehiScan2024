import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './android/app/src/screens/MainScreen'; // Adjust the path as needed
import AuthPage from './android/app/src/screens/AuthPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthPage">
        <Stack.Screen name="AuthPage" component={AuthPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
