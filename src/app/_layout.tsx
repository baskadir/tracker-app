import { AuthProvider } from "../context/AuthContext";
import { Slot } from "expo-router";

export default function RootLayoutNav() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
