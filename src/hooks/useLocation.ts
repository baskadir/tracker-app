import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";
import { useEffect, useState } from "react"

export default (shouldTrack: boolean, callback: any) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        let subscriber: any;
        const startWatching = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync();
                if (!granted) {
                    throw new Error('Location permission not granted');
                }

                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10
                    },
                    callback
                );
            } catch (error: any) {
                setError(error);
            }
        }

        if (shouldTrack)
            startWatching();
        else {
            if (subscriber)
                subscriber.remove();
            subscriber = null;
        }

        return () => {
            if (subscriber)
                subscriber.remove()
        };

    }, [shouldTrack, callback])

    return { error };
}