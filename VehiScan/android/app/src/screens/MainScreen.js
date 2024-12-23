import React, { useState, useEffect } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const MainScreen = () => {
  const [cameraPermissionGranted, setCameraPermissionGranted] = useState(false);

  // Request camera permission when the component mounts
  useEffect(() => {
    requestCameraPermission();
  }, []);

  // Function to request camera permission
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        setCameraPermissionGranted(true);  // Set state to show camera
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Handle QR code scanned
  const onSuccess = (e) => {
    console.log('QR Code scanned:', e.data);
    alert('Scanned QR Code: ' + e.data);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {cameraPermissionGranted ? (
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.off}
          topContent={<Text style={{ backgroundColor: 'transparent' }}>Scan QR Code</Text>}
          bottomContent={<Text style={{ backgroundColor: 'transparent' }}>Align QR code within the frame</Text>}
        />
      ) : (
        <Text>Waiting for Camera Permission...</Text>
      )}
    </View>
  );
};

export default MainScreen;
