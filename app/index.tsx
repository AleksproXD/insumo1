import { Text, View } from "react-native";
import "../global.css";
import { ProfileDetails } from "@/components/ProfileDetails";


export default function Index() {
  return (
    <View className="flex-1 flex-col bg-white p-10 w-screen h-screen  ">
      <ProfileDetails></ProfileDetails>
    </View>
  );
}
