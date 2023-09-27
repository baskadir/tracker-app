import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const AccountScreen = () => {
  return (
    <View>
      <Text>AccountScreen</Text>
      <Link href={'/(auth)/sign-up'}>
        <Text>Sign out</Text>
      </Link>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})