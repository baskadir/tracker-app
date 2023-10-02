import { FlatList, StyleSheet, View } from "react-native";
import { usePath } from "../../../context/PathContext";
import { useEffect } from "react";
import PathItem from "../../../components/PathItem";
import { IPath } from "../../../types/path";
import { useIsFocused } from "@react-navigation/native";

const ListScreen = () => {
  const { paths, fetchPaths } = usePath();
  const isFocused = useIsFocused();

  useEffect(() => {
    fetchPaths();
  }, [isFocused]);

  const renderPathItem = ({ item }: { item: IPath }) => (
    <PathItem item={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={paths} renderItem={renderPathItem} />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
});
