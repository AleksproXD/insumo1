import BottomDetails from "@/components/BottomDetails";
import { ProfileDetails } from "@/components/ProfileDetails";
import { View } from "react-native";
import "../global.css";


export default function Index() {
  return (
    <View className="flex flex-col bg-white w-screen h-screen justify-start">
      <ProfileDetails></ProfileDetails>
      <BottomDetails></BottomDetails>
    </View>
  );
}
