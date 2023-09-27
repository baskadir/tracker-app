import { Tabs, useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons";

export default () => {
    const router = useRouter();

    const setIconName = (routeName: string, focused: boolean) => {
        switch (routeName) {
            case "paths":
                return focused ? 'list' : 'list-outline';
            case "create-path":
                return focused ? 'add-circle' : 'add-circle-outline';
            case "account":
                return focused ? 'settings' : 'settings-outline';
        }
    }

    return (
        <Tabs screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                size = focused ? 28 : 20;
                return <Ionicons name={setIconName(route.name, focused)} size={size} color={color} />;
            },
        })}>
            <Tabs.Screen name="paths" options={{ headerShown: false, title: 'Paths' }} listeners={{
                tabPress: () => router.replace('/(tabs)/paths/list')
            }} />
            <Tabs.Screen name="create-path" options={{ title: 'Create' }} />
            <Tabs.Screen name="account" options={{ title: 'Account' }} />
        </Tabs>
    )
}