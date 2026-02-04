import React, { useState, useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function WashScreen() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval as NodeJS.Timeout);
    }
    return () => clearInterval(interval as NodeJS.Timeout);
  }, [isActive, time]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Nasal Wash</ThemedText>
      <ThemedText className="text-red-500">Tailwind Test</ThemedText>
      <ThemedText style={styles.timer}>{time}s</ThemedText>
      <ThemedView style={styles.buttons}>
        <Button title={isActive ? 'Pause' : 'Play'} onPress={toggle} />
        <Button title="Reset" onPress={reset} />
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
  timer: {
    fontSize: 48,
    marginVertical: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});
