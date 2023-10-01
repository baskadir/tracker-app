import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { TextInput } from "react-native-gesture-handler";
import { changeName, reset, startRecording, stopRecording } from "../redux/features/location/locationSlice";
import useSavePath from "../hooks/useSavePath";

const PathForm = () => {
  const { name, recording, locations } = useSelector((state: RootState) => state.location);
  const dispatch = useDispatch();

  const [savePath] = useSavePath();

  const Button = ({title, onPress} : {title: string, onPress: () => void}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
  }

  return (
    <>
        <TextInput 
            value={name}
            onChangeText={(value) => dispatch(changeName(value))}
            placeholder="Enter name for your path"
            style={styles.input}
        />
        {
            recording ? (
                <Button title="Stop Recording" onPress={() => dispatch(stopRecording())} />
            ) : (
                <Button title="Start Recording" onPress={() => dispatch(startRecording())} />
            )
        }
        {
            (!recording && locations.length) ? (
                <Button title="Save Track" onPress={savePath} />
            ) : null
        }
    </>
  );
};

export default PathForm;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#555',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        margin: 30,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#34A3A7',
        paddingVertical: 12,
        borderRadius: 12,
        marginHorizontal: 30,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff'
    },
});
