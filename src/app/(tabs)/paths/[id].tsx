import { StyleSheet, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { usePath } from "../../../context/PathContext";
import MapView, { Polyline } from "react-native-maps";
import { IPath } from "../../../types/path";
import { useEffect } from "react";

const DetailScreen = () => {
  const { paths } = usePath();
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const path = paths.find((p) => p._id === id) as IPath;

  const initialCoords = path?.locations[0].coords;

  useEffect(() => {
    navigation.setOptions({title: path.name})
  }, [path.name])


  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={path.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    padding: 12,
    backgroundColor: "#34A3A7",
    marginVertical: 10,
  },
  map: {
    height: "100%",
  },
});
