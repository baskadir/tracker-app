import { StyleSheet, View } from "react-native";
import AuthForm from "../../components/AuthForm";
import NavLink from "../../components/NavLink";
import { useAuth } from "../../context/AuthContext";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";

const SignInScreen = () => {
  const { auth, signIn, clearErrorMessage } = useAuth();

  const focused = useIsFocused();

  useEffect(() => {
    focused ? clearErrorMessage() : null
  }, [])

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        onSubmit={signIn}
        errorMessage={auth.errorMessage}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Don't have an account? Go back to sign up."
        routeName="sign-up"
      />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
});
