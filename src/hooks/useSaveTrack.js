import {useContext} from "react";
import {Context as TrackContext} from "../context/TrackContext";
import {Context as LocationContext} from "../context/LocationContext";

export default () => {

    const {createTrack} = useContext(TrackContext);

    const {state} = useContext(LocationContext);

    const {locations, name} = state;

    const saveTrack = () => {

        createTrack(name, locations);

    };

    return [saveTrack];

};