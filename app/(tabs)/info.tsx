import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { TextType, ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function InfoScreen() {
	return (
		<ScrollView>
			<ThemedView style={styles.container}>
				<ThemedText type={TextType.TITLE}>
					Nasal Wash Information
				</ThemedText>
				<ThemedText style={styles.paragraph}>
					Nasal washing, also known as nasal irrigation, is a personal
					hygiene practice in which the nasal cavity is washed to
					flush out mucus and debris from the nose and sinuses.
				</ThemedText>
				<ThemedText style={styles.paragraph}>
					This practice is generally well-tolerated and beneficial,
					with no significant adverse effects.
				</ThemedText>
				<ThemedText type={TextType.SUBTITLE}>Benefits:</ThemedText>
				<ThemedText style={styles.listItem}>
					- Cleanses the nasal passages
				</ThemedText>
				<ThemedText style={styles.listItem}>
					- Removes excess mucus
				</ThemedText>
				<ThemedText style={styles.listItem}>
					- Reduces nasal congestion
				</ThemedText>
				<ThemedText style={styles.listItem}>
					- Improves breathing
				</ThemedText>
				<ThemedText type={TextType.SUBTITLE}>
					How to perform a nasal wash:
				</ThemedText>
				<ThemedText style={styles.paragraph}>
					1. Prepare a saline solution. You can buy pre-made solutions
					or make your own using distilled, sterile, or previously
					boiled water.
				</ThemedText>
				<ThemedText style={styles.paragraph}>
					2. Use a container such as a neti pot, syringe bulb, or
					squeeze bottle.
				</ThemedText>
				<ThemedText style={styles.paragraph}>
					3. Tilt your head over a sink and pour the saline solution
					into one nostril.
				</ThemedText>
				<ThemedText style={styles.paragraph}>
					4. The solution will flow through your nasal passages and
					out the other nostril.
				</ThemedText>
				<ThemedText style={styles.paragraph}>
					5. Gently blow your nose to clear any remaining solution.
				</ThemedText>
				<ThemedText style={styles.paragraph}>
					6. Repeat on the other side.
				</ThemedText>
			</ThemedView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	paragraph: {
		marginBottom: 10,
	},
	listItem: {
		marginLeft: 20,
	},
});
