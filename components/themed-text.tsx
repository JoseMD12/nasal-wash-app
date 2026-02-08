import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
	type?: TextType;
	className?: string;
};

export function ThemedText({ className, type, ...rest }: ThemedTextProps) {
	const defaultClasses = "text-base";

	let typeSpecificClasses = "";
	switch (type) {
		case TextType.TITLE:
			typeSpecificClasses = "text-xl font-bold";
			break;
		case TextType.SUBTITLE:
			typeSpecificClasses = "text-lg font-semibold";
			break;
		case TextType.DEFAULT_SEMI_BOLD:
			typeSpecificClasses = "font-semibold";
			break;
		case TextType.LINK:
			typeSpecificClasses = "text-sky-700";
			break;
		default:
			break;
	}

	const combinedClassName = `${defaultClasses} ${typeSpecificClasses} ${className || ""}`;

	return <Text className={combinedClassName.trim()} {...rest} />;
}

export enum TextType {
	TITLE,
	DEFAULT_SEMI_BOLD,
	SUBTITLE,
	LINK,
}
