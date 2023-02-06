import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WriteScreen from "../screens/Write.screen";
import BottomMainTapNavigation from "./BottomMainTap.navigation";

const Stack = createNativeStackNavigator();

export default function RootStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MainTap' component={BottomMainTapNavigation} options={{ headerShown: false }} />
      <Stack.Screen name='Write' component={WriteScreen} />
    </Stack.Navigator>
  )
}
