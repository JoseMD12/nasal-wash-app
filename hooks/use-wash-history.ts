import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface WashRecord {
  id: string;
  date: string;
  duration: number;
  soroType: "caseiro" | "fisiologico";
  difficulty: "facil" | "medio" | "dificil" | null;
  hadSecretion: boolean;
}

const WASH_HISTORY_KEY = "nasal-wash-history";

export const useWashHistory = () => {
  const [history, setHistory] = useState<WashRecord[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Effect to load history from AsyncStorage on component mount
  useEffect(() => {
    const loadHistory = async () => {
      try {
        const saved = await AsyncStorage.getItem(WASH_HISTORY_KEY);
        if (saved !== null) {
          setHistory(JSON.parse(saved));
        }
      } catch (error) {
        console.error("Failed to load wash history from AsyncStorage", error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadHistory();
  }, []); // Run only once on mount

  // Effect to save history to AsyncStorage whenever it changes
  useEffect(() => {
    if (isLoaded) { // Only save once initial load is complete
      const saveHistory = async () => {
        try {
          await AsyncStorage.setItem(WASH_HISTORY_KEY, JSON.stringify(history));
        } catch (error) {
          console.error("Failed to save wash history to AsyncStorage", error);
        }
      };
      saveHistory();
    }
  }, [history, isLoaded]); // Run when history or isLoaded changes

  const addRecord = (record: Omit<WashRecord, "id" | "date">) => {
    const newRecord: WashRecord = {
      ...record,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    setHistory((prev) => [newRecord, ...prev]);
  };

  const getStreak = () => {
    if (history.length === 0) return 0;

    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i <= 30; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(checkDate.getDate() - i);
      const dateStr = checkDate.toISOString().split("T")[0];

      const hasWash = history.some(
        (record) => record.date.split("T")[0] === dateStr
      );

      if (hasWash) {
        streak++;
      } else if (i > 0) {
        break;
      }
    }

    return streak;
  };

  const getThisWeekDays = () => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const days: string[] = [];
    // Using simple labels for days; adjust if you need full weekday names
    const dayLabels = ["D", "S", "T", "Q", "Q", "S", "S"]; // S, M, T, W, T, F, S

    for (let i = 0; i < 7; i++) {
      const checkDate = new Date(startOfWeek);
      checkDate.setDate(startOfWeek.getDate() + i);
      const dateStr = checkDate.toISOString().split("T")[0];

      const hasWash = history.some(
        (record) => record.date.split("T")[0] === dateStr
      );

      if (hasWash) {
        days.push(dayLabels[i]);
      }
    }

    return days;
  };

  const getTotalWashes = () => history.length;

  return {
    history,
    addRecord,
    getStreak,
    getThisWeekDays,
    getTotalWashes,
    isLoaded // Useful for components that might need to wait for data to load
  };
};
