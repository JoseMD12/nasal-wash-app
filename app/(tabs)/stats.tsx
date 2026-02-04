import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function StatsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Statistics</ThemedText>
      <ThemedView style={styles.statContainer}>
        <ThemedText style={styles.statLabel}>Washes per week:</ThemedText>
        <ThemedText style={styles.statValue}>5</ThemedText>
      </ThemedView>
      <ThemedView style={styles.statContainer}>
        <ThemedText style={styles.statLabel}>Average duration:</ThemedText>
        <ThemedText style={styles.statValue}>30s</ThemedText>
      </ThemedView>
      <ThemedView style={styles.statContainer}>
        <ThemedText style={styles.statLabel}>Longest streak:</ThemedText>
        <ThemedText style={styles.statValue}>10 days</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 18,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
