import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const JournalListScreen = () => {
  const journals = [
    { id: '1', title: 'Journal 1', content: 'This is the first journal' },
    { id: '2', title: 'Journal 2', content: 'This is the second journal' },
    
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={journals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.journalCard}>
            <Text style={styles.journalTitle}>{item.title}</Text>
            <Text style={styles.journalContent}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  journalCard: {
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
  },
  journalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  journalContent: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default JournalListScreen;
