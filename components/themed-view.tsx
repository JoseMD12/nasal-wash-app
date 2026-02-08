import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
	className?: string;
};

export function ThemedView({ className, ...rest }: ThemedViewProps) {
	const defaultClasses = " ";

	const combinedClassName = `${defaultClasses} ${className || ""}`;

	return <View className={combinedClassName.trim()} {...rest} />;
}
