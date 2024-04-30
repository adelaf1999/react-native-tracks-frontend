import '../_mockLocation'; // For test purposes only

import React, {useEffect, useState, useContext} from "react";
import { StyleSheet} from "react-native";
import { Text } from '@rneui/themed';
import Map from "../components/Map";
import { SafeAreaView } from 'react-native-safe-area-context';
import {Context as LocationContext} from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {

    const {addLocation} = useContext(LocationContext);

    const [err] = useLocation((location) => addLocation(location));

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