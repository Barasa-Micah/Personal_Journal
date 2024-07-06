import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    fetchJournalEntries();
  }, []);

  const fetchJournalEntries = async () => {
    try {
      const response = await mockApiCall();
      setEntries(response.entries);
    } catch (error) {
      Alert.alert('Error', 'Failed to load journal entries.');
    } finally {
      setLoading(false);
    }
  };

  const mockApiCall = () => {
    // This is a mock function to simulate fetching journal entries
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          entries: [
            { id: '1', title: 'Entry 1', summary: 'Summary of entry 1' },
            { id: '2', title: 'Entry 2', summary: 'Summary of entry 2' },
            // Add more entries as needed
          ],
        });
      }, 1000);
    });
  };

  const renderEntry = ({ item }) => (
    <View style={styles.entry}>
      <Text style={styles.entryTitle}>{item.title}</Text>
      <Text style={styles.entrySummary}>{item.summary}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Journal</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={entries}
          renderItem={renderEntry}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text>No journal entries found.</Text>}
        />
      )}
      <Button title="Add New Entry" onPress={() => navigation.navigate('NewEntry')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  entry: {
    padding: 16,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  entrySummary: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;
