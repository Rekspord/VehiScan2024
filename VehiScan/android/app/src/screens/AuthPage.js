import React, { useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { initializeApp } from 'firebase/app';
import { StyleSheet, Text, View,TouchableOpacity, SafeAreaView, Image } from "react-native";

const firebaseConfig = {
    apiKey: "AIzaSyByrBDcScaR8jf_iAdadT1NHiVycp7O9jU",
    authDomain: "vehiscan.firebaseapp.com",
    projectId: "vehiscan-1dd2e",
    storageBucket: "vehisca.firebaseapp.com",
    messagingSenderId: "495880548904",
    appId: "1:495880548904:android:616df07eda27b17ee63b1d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const checkFirebase = () => {
    if (app) {
        console.log('Firebase initialized');
    } else {
        console.log('Firebase not initialized');
    }
}

export default function AuthPage({ navigation }) {
    useEffect(() => {
        checkFirebase();
    }, []); 

return (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Welcome to VehiScan</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Login")}
    >
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("SignUp")}
    >
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B4B4B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
  },
  appName: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    backgroundColor: '#666',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    color: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#ccc',
  },
  socialButton: {
    width: '100%',
    backgroundColor: '#555',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginVertical: 5,
  },
  socialText: {
    color: '#fff',
    fontSize: 16,
  },
  createAccount: {
    color: '#00f',
    marginTop: 20,
  },
});