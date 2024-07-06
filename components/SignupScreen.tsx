import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = async () => {
    // Replace this with your actual signup logic
    const response = await mockApiCall(username, email, password);
    if (response.success) {
      Alert.alert('Signup Successful', 'You have successfully signed up!');
      // Navigate to the login screen or another screen upon successful signup
      navigation.navigate('Login');
    } else {
      Alert.alert('Signup Failed', 'There was an error during signup.');
    }
  };

  const mockApiCall = (username, email, password) => {
    // This is a mock function to simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username && email && password) {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default SignupScreen;
