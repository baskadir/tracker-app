import { Stack } from "expo-router";

export default () => {
  return (
    <Stack initialRouteName="list">
      <Stack.Screen
        name="list"
        options={{ headerTitle: "Path List", gestureEnabled: false }}
      />
      <Stack.Screen name="[id]" />
    </Stack>
  );
};
