import "../../_mockLocation";
import { StyleSheet, View, Text } from "react-native";
import React, { useCallback } from "react";
import Map from "../../components/Map";
import PathForm from "../../components/PathForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addLocation } from "../../redux/features/location/locationSlice";
import { ILocation } from "../../types/location";
import useLocation from "../../hooks/useLocation";
import { useIsFocused } from "@react-navigation/native";

const CreatePathScreen = () => {
  const { recording } = useSelector((state: RootState) => state.location);
  const dispatch = useDispatch();

  const focused = useIsFocused();

  const callback = useCallback(
    (location: ILocation) => {
      dispatch(addLocation(location));
    },
    [recording]
  );

  const { error } = useLocation(focused || recording, callback);

  return (
    <View style={styles.container}>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
      <PathForm />
    </View>
  );
};

export default CreatePathScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
