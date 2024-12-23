import { firebase } from '@react-native-firebase/app';

const initializeFirebase = (config) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};

export default initializeFirebase;
