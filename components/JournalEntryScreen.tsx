import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const JournalEntryScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSave = async () => {
    const response = await mockApiCall({ title, content, category });
    if (response.success) {
      Alert.alert('Save Successful', 'Your journal entry has been saved.');
      // Navigate back to the home screen or another appropriate screen
      navigation.navigate('Home');
    } else {
      Alert.alert('Save Failed', 'There was an error saving your journal entry.');
    }
  };

  const mockApiCall = (entry) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (entry.title && entry.content && entry.category) {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Journal Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Save" onPress={handleSave} />
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

export default JournalEntryScreen;
