import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { IPath } from "../types/path";

const PathItem = ({ item }: {item: IPath}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => router.push(`/paths/${item._id}`)}
    >
      <Text style={styles.itemText}>{item.name}</Text>
      <Entypo name="chevron-right" style={styles.icon} />
    </TouchableOpacity>
  );
};

export default PathItem;

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 16,
    marginVertical: 4,
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#34A3A7",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
  icon: {
    color: "#fff",
    fontSize: 22,
  },
});
