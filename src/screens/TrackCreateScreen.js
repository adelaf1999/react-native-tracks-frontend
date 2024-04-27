import '../_mockLocation'; // For test purposes only

import React, {useEffect, useState, useContext} from "react";
import { StyleSheet} from "react-native";
import { Text } from '@rneui/themed';
import Map from "../components/Map";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import {Context as LocationContext} from "../context/LocationContext";

const TrackCreateScreen = () => {

    const {addLocation} = useContext(LocationContext);

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

        }, (location) => {
            // console.log("watch position");
            console.log(location);
            addLocation(location);
        })

    };

    useEffect( () => {

        (async () => {
            await startWatching();
        })();

    }, []);

    return(
        <SafeAreaView>

            <Text h2>Create a Track</Text>

            <Map/>

            {err ? <Text>Please enable location services</Text> : null}

        </SafeAreaView>
    );

};

const styles = StyleSheet.create({});

export default TrackCreateScreen;