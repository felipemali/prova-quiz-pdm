import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../HomeScreen";
import ProfileScreen from "../ProfileScreen";
import SettingsScreen from "../SettingsScreen";
import Game from "../Game";
import { useAuth } from "../../provider/Auth";

const Tab = createBottomTabNavigator();

const Home = () => {
  const { isGame } = useAuth();

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: "#eee",
        tabBarActiveBackgroundColor: "#ccc",
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "#000",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      {isGame && (
        <Tab.Screen
          name="Game"
          component={Game}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="help-outline" size={size} color={color} />
            ),
          }}
        />
      )}

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
