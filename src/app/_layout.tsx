import { Provider } from "react-redux";
import { AuthProvider } from "../context/AuthContext";
import { Slot } from "expo-router";
import { store } from "../redux/store";
import { PathProvider } from "../context/PathContext";

export default function RootLayoutNav() {
  return (
    <AuthProvider>
      <PathProvider>
        <Provider store={store}>
          <Slot />
        </Provider>
      </PathProvider>
    </AuthProvider>
  );
}
