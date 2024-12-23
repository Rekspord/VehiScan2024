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
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Plate Number"
        value={plateNumber}
        onChangeText={setPlateNumber}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Registration Number"
        value={registrationNumber}
        onChangeText={setRegistrationNumber}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Owner's Name"
        value={ownerName}
        onChangeText={setOwnerName}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Vehicle Color"
        value={vehicleColor}
        onChangeText={setVehicleColor}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Body Number"
        value={bodyNumber}
        onChangeText={setBodyNumber}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Register Vehicle" onPress={handleRegister} />
    </View>
  );
}
