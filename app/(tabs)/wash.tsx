import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";

import { TextType, ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function WashScreen() {
	const [isActive, setIsActive] = useState(false);
	const [time, setTime] = useState(0);

	useEffect(() => {
		// let interval: NodeJS.Timeout | null = null;
		// if (isActive) {
		// 	interval = setInterval(() => {
		// 		setTime((time) => time + 1);
		// 		}, 1000);
		// } else if (!isActive && time !== 0) {
		// 	clearInterval(interval as NodeJS.Timeout);
		// }
		// return () => clearInterval(interval as NodeJS.Timeout);
	}, [isActive, time]);

	const toggle = () => {
		setIsActive(!isActive);
	};

	const reset = () => {
		setTime(0);
		setIsActive(false);
	};

	return (
		<ThemedView className="flex-1 items-center justify-center pt-safe pb-safe">
			<ThemedText type={TextType.TITLE}>Nasal Wash</ThemedText>
			<ThemedText className='text-red-500'>Tailwind Test</ThemedText>
			<ThemedText className="text-5xl my-5">{time}s</ThemedText>
			<ThemedView className="flex-row justify-around w-3/5">
				<Pressable
					onPress={toggle}
					className='bg-red-500 p-4 rounded-full'
				>
					<ThemedText className='text-white font-bold'>
						{isActive ? "Pause" : "Play"}
					</ThemedText>
				</Pressable>
				<Pressable
					onPress={reset}
					className='bg-blue-500 p-4 rounded-full'
				>
					<ThemedText className='text-white font-bold'>
						Reset
					</ThemedText>
				</Pressable>
			</ThemedView>
		</ThemedView>
	);
}
