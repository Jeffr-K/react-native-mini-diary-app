import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../screens/Search.screen";
import CalendarScreen from "../screens/Calendar.screen";
import FeedsScreen from "../screens/Feeds.screen";
import Icon from "react-native-vector-icons/MaterialIcons";


const Tab = createBottomTabNavigator();

export default function BottomMainTapNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#009668'
      }}
    >
      <Tab.Screen
        name='Feeds'
        component={FeedsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='view-stream' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Calendar'
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='event' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='search' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
