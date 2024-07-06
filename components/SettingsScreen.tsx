import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = async () => {
    const response = await mockApiCall({ username, password });
    if (response.success) {
      Alert.alert('Update Successful', 'Your settings have been updated.');
      // Optionally, navigate to another screen if needed
      navigation.navigate('Home');
    } else {
      Alert.alert('Update Failed', 'There was an error updating your settings.');
    }
  };

  const mockApiCall = (settings) => {
    // This is a mock function to simulate updating settings
    return new Promise((resolve) => {
      setTimeout(() => {
        if (settings.username && settings.password) {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default SettingsScreen;
