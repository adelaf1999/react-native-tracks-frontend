import React from "react";
import { Input, Button } from '@rneui/themed';
import Spacer from "./Spacer";

const TrackForm = () => {

    return(
        <>
            <Spacer>
                <Input placeholder="Enter Name"/>
            </Spacer>

            <Spacer>
                <Button title="Start Recording"/>
            </Spacer>

        </>
    )

};

export default TrackForm;