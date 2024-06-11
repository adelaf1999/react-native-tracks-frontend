import React, {useContext} from "react";
import { Input, Button } from '@rneui/themed';
import Spacer from "./Spacer";
import {Context as LocationContext} from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {

    const {
        state,
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    const {name, recording, locations} = state;


    return(
        <>
            <Spacer>

                <Input
                    onChangeText={changeName}
                    placeholder="Enter Name"
                    value={name}
                />

            </Spacer>

            <Spacer>

                {
                    recording ?
                        <Button
                            title="Stop"
                            onPress={stopRecording}
                        /> :
                        <Button
                            title="Start Recording"
                            onPress={startRecording}
                        />
                }

            </Spacer>


            <Spacer>
                {
                    !recording && locations.length > 0
                        ? <Button title="Save Recording" onPress={saveTrack} />
                        : null
                }
            </Spacer>

        </>
    )

};

export default TrackForm;