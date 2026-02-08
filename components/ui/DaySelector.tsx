import * as React from "react";
import { View, Pressable, Text } from "react-native";
import { cn } from "@/lib/utils";

interface DaySelectorProps {
  selectedDays: string[];
  onToggle: (day: string) => void;
  className?: string; // className will be passed to the root View
}

const days = [
  { key: "D", label: "Dom" },
  { key: "S", label: "Seg" },
  { key: "T", label: "Ter" },
  { key: "Q", label: "Qua" },
  { key: "Q2", label: "Qui" },
  { key: "S2", label: "Sex" },
  { key: "S3", label: "Sáb" },
];

const DaySelector: React.FC<DaySelectorProps> = ({
  selectedDays,
  onToggle,
  className,
}) => {
  return (
    <View className={cn("flex flex-row gap-2", className)}>
      {days.map((day, index) => {
        const isSelected = selectedDays.includes(day.key);
        return (
          <Pressable
            key={day.key + index}
            onPress={() => onToggle(day.key)}
            className={cn(
              "w-9 h-9 rounded-full items-center justify-center",
              isSelected
                ? "bg-primary"
                : "bg-muted"
            )}
          >
            <Text
              className={cn(
                "text-sm font-semibold",
                isSelected
                  ? "text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              {day.key === "Q2" || day.key === "S2" || day.key === "S3"
                ? day.key.charAt(0)
                : day.key}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export { DaySelector };
