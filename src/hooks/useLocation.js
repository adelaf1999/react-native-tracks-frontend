import {useEffect, useState} from "react";
import * as Location from 'expo-location';

export default (callback) => {

    const [err, setErr] = useState(null);

    const startWatching = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            setErr('Permission to access location was denied');
            return;
        }

        await Location.watchPositionAsync({
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,

        }, callback)

    };

    useEffect( () => {

        (async () => {
            await startWatching();
        })();

    }, []);

    return [err];

};