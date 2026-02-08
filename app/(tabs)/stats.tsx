import React from "react";

import { TextType, ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function StatsScreen() {
	return (
		<ThemedView className='flex-1 items-center justify-center bg-red-600'>
			<ThemedText type={TextType.TITLE}>Statistics</ThemedText>
			<ThemedView className='mt-5 items-center'>
				<ThemedText className='text-lg'>Washes per week:</ThemedText>
				<ThemedText className='text-2xl font-bold'>5</ThemedText>
			</ThemedView>
			<ThemedView className='mt-5 items-center'>
				<ThemedText className='text-lg'>Average duration:</ThemedText>
				<ThemedText className='text-2xl font-bold'>30s</ThemedText>
			</ThemedView>
			<ThemedView className='mt-5 items-center'>
				<ThemedText className='text-lg'>Longest streak:</ThemedText>
				<ThemedText className='text-2xl font-bold'>10 days</ThemedText>
			</ThemedView>
		</ThemedView>
	);
}

