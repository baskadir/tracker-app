import { Provider } from "react-redux";
import { AuthProvider } from "../context/AuthContext";
import { Slot } from "expo-router";
import { store } from "../redux/store";

export default function RootLayoutNav() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Slot />
      </Provider>
    </AuthProvider>
  );
}
