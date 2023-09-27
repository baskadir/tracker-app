import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ListScreen = () => {
  return (
    <View>
      <Text>ListScreen</Text>
      <Link href={'/paths/1'}>
        <Text>Go to detail</Text>
      </Link>
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({})