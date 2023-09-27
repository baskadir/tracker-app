import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DetailScreen = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>DetailScreen : {id}</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})