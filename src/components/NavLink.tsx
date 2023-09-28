import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface NavLinkProps {
  text: string;
  routeName: string;
}

const NavLink = ({ text, routeName }: NavLinkProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.replace(`/${routeName}`)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

export default NavLink;

const styles = StyleSheet.create({
    link: {
    fontSize: 16,
    fontWeight: "800",
    color: "#34A3A7",
    textAlign: "center",
  },
});
