import {useContext} from "react";
import {Context as TrackContext} from "../context/TrackContext";
import {Context as LocationContext} from "../context/LocationContext";
import * as RootNavigation from '../RootNavigation';

export default () => {

    const {createTrack} = useContext(TrackContext);

    const {state, reset} = useContext(LocationContext);

    const {locations, name} = state;

    const saveTrack = async () => {

        await createTrack(name, locations);

        reset();

        RootNavigation.navigate('TrackList');

    };

    return [saveTrack];

};