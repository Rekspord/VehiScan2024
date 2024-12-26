import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import { firebase } from '@react-native-firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Main');// Navigate to Main after successful login
    } catch (error) {
      Alert.alert('Login Error', error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Account created', 'Please log in.'); // Alert after successful sign-up
    } catch (error) {
      Alert.alert('Sign Up Error', error.message);
    }
  };

  const handleNavigateToLogin = () => {
    navigation.navigate('LoginScreen'); // Navigate to LoginScreen
  };

  const handleNavigateToSignUp = () => {
    navigation.navigate('RegistrationScreen'); // Navigate to RegistrationScreen
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f0f0f0'}}>
      <View 
        style={{ 
          width: '95%', 
          padding: 20, 
          backgroundColor: '#fff', 
          borderRadius: 10, 
          shadowColor: '#000', 
          shadowOffset: { width: 0, height: 2 }, 
          shadowOpacity: 0.25, 
          shadowRadius: 3.84, 
          elevation: 5 
        }}>
      <TextInput
        placeholder="VehiScan"
        editable={false} // Makes it non-editable like a heading
        style={{
          fontSize: 24, // Larger font for heading
          fontWeight: 'bold', // Bold text for emphasis
          textAlign: 'center', // Center the text
          color: '#007bff', // Blue color for the text
          backgroundColor: '#ffffff', // Light background for distinction
          padding: 15, // Add padding for spacing
          marginBottom: 20, // Space below the heading
      }}/>
      <TextInput
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      style={{
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 15,
        fontSize: 16,
        // DropShadow for the text box
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Shadow position
        shadowOpacity: 0.3, // Shadow transparency
        shadowRadius: 4.65, // Shadow blur (iOS)
        elevation: 6, // Shadow depth (Android)
        backgroundColor: '#fff', // Required for elevation to work on Android
        padding: 20, // Optional styling
      }}/>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          width: '100%',
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#ddd',
          marginBottom: 15,
          fontSize: 16,
          // DropShadow for the text box
          shadowColor: '#000', // Shadow color
          shadowOffset: { width: 0, height: 4 }, // Shadow position
          shadowOpacity: 0.3, // Shadow transparency
          shadowRadius: 4.65, // Shadow blur (iOS)
          elevation: 6, // Shadow depth (Android)
          backgroundColor: '#fff', // Required for elevation to work on Android
          padding: 20, // Optional styling
        }}/>
        <View style={{ width: '100%', marginTop: 10 }}>
          <Button
            title="Login"
            onPress={handleLogin}
            color="#007bff" // Modern blue color for the Login button
        /></View>
        <View style={{ width: '100%', marginTop: 10 }}>
          <Button
            title="Sign Up"
            onPress={handleSignUp}
            color="#28a745" // Green color for the Sign Up button
          /></View>
      </View>
    </View>
  );
}
