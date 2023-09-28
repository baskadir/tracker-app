import { StyleSheet, View } from "react-native";
import AuthForm from "components/AuthForm";
import NavLink from "components/NavLink";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for App"
        onSubmit={() => {}}
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
