import { Stack } from "expo-router"

export default () => {
    return (
        <Stack>
            <Stack.Screen name="sign-up" options={{headerTitle: 'Sign Up'}} />
            <Stack.Screen name="sign-in" options={{headerTitle: 'Sign In'}} />
        </Stack>
    )
}