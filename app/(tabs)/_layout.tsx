import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.dark.tint,
				headerShown: false,
				tabBarButton: HapticTab,
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					href: null,
				}}
			/>
			<Tabs.Screen
				name='wash'
				options={{
					title: "Wash",
					tabBarIcon: ({ color }) => (
						<IconSymbol size={28} name='drop.fill' color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='info'
				options={{
					title: "Info",
					tabBarIcon: ({ color }) => (
						<IconSymbol
							size={28}
							name='info.circle.fill'
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='stats'
				options={{
					title: "Stats",
					tabBarIcon: ({ color }) => (
						<IconSymbol
							size={28}
							name='chart.bar.fill'
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
