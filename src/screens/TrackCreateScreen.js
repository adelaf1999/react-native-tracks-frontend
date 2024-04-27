import '../_mockLocation';

import React, {useEffect, useState} from "react";
import { StyleSheet} from "react-native";
import { Text } from '@rneui/themed';
import Map from "../components/Map";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';

const TrackCreateScreen = () => {

    const [err, setErr] = useState(null);

    const startWatching = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            setErr('Permission to access location was denied');
            return;
        }

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