import {useEffect, useState} from "react";
import * as Location from 'expo-location';

export default (shouldTrack, callback) => {

    const [err, setErr] = useState(null);

    useEffect( () => {

        let subscriber;

        const startWatching = async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErr('Permission to access location was denied');
                return;
            }

            subscriber = await Location.watchPositionAsync({
                accuracy: Location.Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,

            }, callback)

        };

        if(shouldTrack){

            (async () => {
                await startWatching();
            })();

        }else{

            if(subscriber){

                subscriber.remove();

            }



           subscriber = null;

        }


        // cleanup function, gets called the next time useEffect runs
        // and before any function in useEffect

        return () => {

            if(subscriber){
                subscriber.remove();
            }

        };

    }, [shouldTrack, callback]);

    // useEffect re-runs anytime shouldTrack or callback change in memory

    // Make sure to ALWAYS add props (variables/functions that get passed from
    // other components),
    // Any state or context variables in the dependency list of useEffect

    // It's fine to reference setter functions for state values
    // in useEffect without adding to dependency list

    // We did not add the err variable because it's not used in the useEffect function.

    // Check notes on avoiding stale references for more info

    return [err];

};