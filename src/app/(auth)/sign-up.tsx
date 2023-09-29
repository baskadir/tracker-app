import { StyleSheet, View } from "react-native";
import AuthForm from "../../components/AuthForm";
import NavLink from "../../components/NavLink";
import { useAuth } from "../../context/AuthContext";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";

const SignUpScreen = () => {
  const {auth, signUp, clearErrorMessage} = useAuth();

  const focused = useIsFocused();

  useEffect(() => {
    focused ? clearErrorMessage() : null
  }, [])

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for App"
        onSubmit={signUp}
        errorMessage={auth.errorMessage}
        submitButtonText="Sign Up"
      />
      <NavLink
        text="Already have an account? Sign in instead."
        routeName="sign-in"
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});
