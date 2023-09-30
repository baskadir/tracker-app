import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ILocation } from '../../../types/location';

export interface LocationState {
    name: string;
    recording: boolean;
    locations: Array<ILocation>;
    currentLocation: ILocation | null;
}

const initialState: LocationState = {
    name: '',
    recording: false,
    locations: [],
    currentLocation: null
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        startRecording: (state) => {
            state.recording = true;
        },
        stopRecording: (state) => {
            state.recording = false;
        },
        addLocation: (state, action: PayloadAction<ILocation>) => {
            state.currentLocation = action.payload;
            if(state.recording) {
                state.locations.push(action.payload);
            }
        },
        reset: (state) => {
            state.name = '';
            state.locations = [];
        },
        changeName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    },
})

export const { startRecording, stopRecording, addLocation, reset, changeName } = locationSlice.actions

export default locationSlice.reducer