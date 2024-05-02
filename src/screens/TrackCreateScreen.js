import '../_mockLocation'; // For test purposes only

import React, {useContext, useCallback} from "react";
import { StyleSheet} from "react-native";
import { Text } from '@rneui/themed';
import Map from "../components/Map";
import { SafeAreaView } from 'react-native-safe-area-context';
import {Context as LocationContext} from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { useIsFocused } from '@react-navigation/native';
import TrackForm from "../components/TrackForm";


const TrackCreateScreen = () => {

    const {state, addLocation} = useContext(LocationContext);

    const {recording} = state;

    const isFocused = useIsFocused();

    // Returns a new function in memory only when
    // the variables we track actually change

    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);

    const [err] = useLocation(isFocused || recording, callback);


    return(
        <SafeAreaView>

            <Text h2>Create a Track</Text>

            <Map/>

            {err ? <Text>Please enable location services</Text> : null}

            <TrackForm/>

        </SafeAreaView>
    );

};

const styles = StyleSheet.create({});

export default TrackCreateScreen;