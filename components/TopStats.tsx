import { useContext } from "react";
import { ThemeContext } from "./ThemContext";
import { View, Text } from "./Themed";
import { Image } from "react-native";

export default function TopStats() {
	const { theme } = useContext(ThemeContext);

	return (
		<View
			style={{ backgroundColor: theme.colors.backgroundSecondary }}
			className="pb-3 pt-2 flex items-center justify-around flex-row rounded-b-xl"
		>
			<View
				style={{ backgroundColor: theme.colors.backgroundSecondary }}
				className="flex items-center flex-col"
			>
				<Image
					source={require("../assets/images/icons/flamme.png")}
					style={{ width: 50, height: 50, resizeMode: "contain" }}
				/>
				<Text style={{ color: theme.colors.text }} className="text-xl mt-1">
					50 %
				</Text>
			</View>

			<View
				style={{ backgroundColor: theme.colors.backgroundSecondary }}
				className="w-2/3 flex flex-col gap-2"
			>
				<Text style={{ color: theme.colors.text }} className="text-xl">
					5 jours d'affilés
				</Text>
				<View className="flex flex-row gap-4 bg-slate-100 rounded-lg w-fit items-center justify-center">
					<Image
						source={require("../assets/images/icons/trophy.png")}
						style={{ width: 25, height: 25 }}
					/>
					<Image
						source={require("../assets/images/icons/trophy.png")}
						style={{ width: 25, height: 25 }}
					/>
					<Image
						source={require("../assets/images/icons/trophy.png")}
						style={{ width: 25, height: 25 }}
					/>
					<Image
						source={require("../assets/images/icons/trophy.png")}
						style={{ width: 25, height: 25 }}
					/>
				</View>
			</View>
		</View>
	);
}