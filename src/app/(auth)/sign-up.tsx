import { StyleSheet, Button, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const SignUpScreen = () => {
    const router = useRouter();
    return (
        <View>
            <Text>SignUpScreen</Text>
            <Button title='Go to app' onPress={() => router.push('/(tabs)/paths/list')} />
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})