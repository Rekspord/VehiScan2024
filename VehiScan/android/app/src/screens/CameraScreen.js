// CameraScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = () => {
  let camera;

  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => { camera = ref; }}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio',
          message: 'We need your permission to use your audio',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        }}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Camera is ready</Text>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    flex: 0.1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default CameraScreen;
