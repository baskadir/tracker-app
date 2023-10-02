import { Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

export default () => {
  const router = useRouter();

  const setIconName = (routeName: string, focused: boolean) => {
    switch (routeName) {
      case "paths":
        return focused ? "list" : "list-outline";
      case "create-path":
        return focused ? "add-circle" : "add-circle-outline";
      case "account":
        return focused ? "settings" : "settings-outline";
    }
  };

  const setLabel = (routeName: string) => {
    switch (routeName) {
      case "paths":
        return "Paths";
      case "create-path":
        return "Create";
      case "account":
        return "Account";
    }
  };

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          color = "#34A3A7";
          size = focused ? 28 : 20;
          return (
            <Ionicons
              name={setIconName(route.name, focused)}
              size={size}
              color={color}
            />
          );
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                color: focused ? "#34A3A7" : "#555",
                fontSize: focused ? 11 : 10,
                fontWeight: "normal",
              }}
            >
              {setLabel(route.name)}
            </Text>
          );
        },
      })}
    >
      <Tabs.Screen
        name="paths"
        options={{ headerShown: false }}
        listeners={{
          tabPress: () => router.replace("/paths/list"),
        }}
      />
      <Tabs.Screen name="create-path" options={{ title: "Create" }} />
      <Tabs.Screen name="account" options={{ title: "Account" }} />
    </Tabs>
  );
};
