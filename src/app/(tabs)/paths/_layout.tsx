import { Stack } from "expo-router"

export default () => {
    return (
        <Stack initialRouteName="list">
            <Stack.Screen name="list" options={{headerTitle: 'Path List'}} />
            <Stack.Screen name="[id]" options={{headerTitle: 'Path Detail'}} />
        </Stack>
    )
}