import Constants from "./constants";
import * as Location from "expo-location";
import { ILocation } from "types/location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment: number) : ILocation => {
    return {
        timestamp: Date.now(),
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitude: 5,
            longitude:  Constants.INITIAL_LOCATION.longitude + increment * tenMetersWithDegrees,
            latitude: Constants.INITIAL_LOCATION.latitude + increment * tenMetersWithDegrees
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);