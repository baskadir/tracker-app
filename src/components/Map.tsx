import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Constants from "../constants";

const Map = () => {
  const { currentLocation, locations } = useSelector(
    (state: RootState) => state.location
  );

  if (currentLocation === null)
    return <ActivityIndicator size="large" style={{ marginTop: 100 }} />;

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...Constants.INITIAL_LOCATION,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,185,255,1)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: "50%",
  },
});
