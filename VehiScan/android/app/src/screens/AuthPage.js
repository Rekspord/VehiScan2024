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