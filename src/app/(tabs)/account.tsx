import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useAuth } from '../../context/AuthContext';

const AccountScreen = () => {
  const {signOut} = useAuth();

  return (
    <View>
      <Pressable style={styles.button} onPress={signOut}>
        <Text style={styles.text}>Sign out</Text>
      </Pressable>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#34A3A7',
    paddingVertical: 12,
    borderRadius: 12,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  }
})