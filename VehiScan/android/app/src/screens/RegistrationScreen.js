import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { firebase } from '@react-native-firebase/firestore';

export default function RegistrationScreen() {
  const [plateNumber, setPlateNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [bodyNumber, setBodyNumber] = useState('');

  const handleRegister = async () => {
    try {
      await firebase.firestore().collection('Reg_Information').doc(plateNumber).set({
        plateNumber,
        registrationNumber,
        ownerName,
        vehicleColor,
        bodyNumber,
      });
      Alert.alert('Success', 'Vehicle registered successfully.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f0f0f0' }}> 
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
          placeholder="Vehicle Registration"
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
          placeholder="Plate Number"
          value={plateNumber}
          onChangeText={setPlateNumber}
          style={{ 
            borderWidth: 1, 
            borderColor: '#ccc', 
            padding: 15, 
            marginBottom: 15, 
            borderRadius: 5, 
            fontSize: 16 
          }} />
        <TextInput 
          placeholder="Registration Number"
          value={registrationNumber}
          onChangeText={setRegistrationNumber}
          style={{ 
            borderWidth: 1, 
            borderColor: '#ccc', 
            padding: 15, 
            marginBottom: 15, 
            borderRadius: 5, 
            fontSize: 16 
          }} />
        <TextInput 
          placeholder="Owner's Name"
          value={ownerName}
          onChangeText={setOwnerName}
          style={{ 
            borderWidth: 1, 
            borderColor: '#ccc', 
            padding: 15, 
            marginBottom: 15, 
            borderRadius: 5, 
            fontSize: 16 
          }} />
        <TextInput 
          placeholder="Vehicle Color"
          value={vehicleColor}
          onChangeText={setVehicleColor}
          style={{ 
            borderWidth: 1, 
            borderColor: '#ccc', 
            padding: 15, 
            marginBottom: 15, 
            borderRadius: 5, 
            fontSize: 16 
          }} />
        <TextInput 
          placeholder="Body Number"
          value={bodyNumber}
          onChangeText={setBodyNumber}
          style={{ 
            borderWidth: 1, 
            borderColor: '#ccc', 
            padding: 15, 
            marginBottom: 15, 
            borderRadius: 5, 
            fontSize: 16 
          }} />
        <Button title="Register" onPress={handleRegister} />
      </View>
    </View>
  );
}
