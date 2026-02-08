import { cn } from "@/lib/utils";
import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
	className?: string;
};

export function ThemedView({ className, ...rest }: ThemedViewProps) {
	const defaultClasses = "bg-stone-400";

	const combinedClassName = cn(className, defaultClasses);

	return <View className={combinedClassName} {...rest} />;
}
