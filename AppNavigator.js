import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import { useAuth } from "./src/provider/Auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateUser from "./src/pages/CreateUser";

const Stack = createNativeStackNavigator();
function AppNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuthenticated ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="CreateUser"
            component={CreateUser}
            options={{ title: "CreateUser" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default AppNavigator;
