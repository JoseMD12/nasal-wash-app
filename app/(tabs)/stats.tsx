import { DaySelector } from "@/components/ui/DaySelector";
import { useWashHistory } from "@/hooks/use-wash-history";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const StatsScreen = () => {
	const router = useRouter();
	const { history, getStreak, getThisWeekDays, getTotalWashes } =
		useWashHistory();

	const weekDays = getThisWeekDays();

	const formatDate = (dateStr: string) => {
		const date = new Date(dateStr);
		return date.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "2-digit",
		});
	};

	return (
		<View className='flex-1 flex-col px-6 py-12 animate-fade-in bg-stone-400'>
			<Pressable
				onPress={() => router.push("/")}
				className='self-start mb-6 text-foreground/70'
			>
				<Ionicons name='chevron-back' size={28} />
			</Pressable>

			<Text className='text-3xl font-bold mb-8'>Estatísticas</Text>

			{/* Stats Cards */}
			<View className='flex flex-row gap-4 mb-8'>
				<View className='flex-1 bg-card rounded-2xl p-5 flex flex-col items-center'>
					<Octicons
						name='trophy'
						className='mb-2 text-primary'
						size={28}
					/>
					<Text className='text-3xl font-bold text-primary'>
						{getStreak()}
					</Text>
					<Text className='text-sm text-muted-foreground text-center'>
						dias seguidos
					</Text>
				</View>
				<View className='flex-1 bg-card rounded-2xl p-5 flex flex-col items-center'>
					<Ionicons
						name='water'
						className='mb-2 text-primary'
						size={28}
					/>
					<Text className='text-3xl font-bold text-primary'>
						{getTotalWashes()}
					</Text>
					<Text className='text-sm text-muted-foreground text-center'>
						total de lavagens
					</Text>
				</View>
			</View>

			{/* This Week */}
			<View className='mb-8'>
				<View className='flex-row items-center gap-2 mb-3'>
					<MaterialCommunityIcons name='calendar-month' size={20} />
					<Text className='text-lg font-semibold'>Esta semana</Text>
				</View>
				<DaySelector selectedDays={weekDays} onToggle={() => {}} />
			</View>

			{/* History */}
			<View className='flex-1'>
				<Text className='text-lg font-semibold mb-3'>
					Histórico recente
				</Text>
				{history.length === 0 ? (
					<Text className='text-muted-foreground text-center py-8'>
						Nenhuma lavagem registrada ainda.
						{"\n"}
						Comece agora!
					</Text>
				) : (
					<View className='space-y-3'>
						{history.slice(0, 10).map((record) => (
							<View
								key={record.id}
								className='bg-card rounded-xl p-4 flex items-center justify-between'
							>
								<View>
									<Text className='font-medium'>
										{formatDate(record.date)}
									</Text>
									<Text className='text-sm text-muted-foreground'>
										{record.soroType === "caseiro"
											? "Soro caseiro"
											: "Soro fisiológico"}
									</Text>
								</View>
								<View className='text-right'>
									<Text className='text-sm text-muted-foreground'>
										{Math.floor(record.duration / 60)}min
									</Text>
									{record.difficulty && (
										<Text
											className={`text-xs px-2 py-0.5 rounded-full ${
												record.difficulty === "facil"
													? "bg-success/20 text-success"
													: record.difficulty ===
														  "medio"
														? "bg-warning/20 text-warning"
														: "bg-destructive/20 text-destructive"
											}`}
										>
											{record.difficulty}
										</Text>
									)}
								</View>
							</View>
						))}
					</View>
				)}
			</View>
		</View>
	);
};

export default StatsScreen;
