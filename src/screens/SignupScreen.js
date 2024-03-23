import React from "react";
import {View, StyleSheet} from "react-native";
import { Text, Input, Button } from '@rneui/themed';
import Spacer from "../components/Spacer";

const SignupScreen = ({navigation}) => {

    return(
        <>

            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>


            <Input
                label="Email"
            />

            <Spacer/>

            <Input
                label="Password"
            />

           
            <Spacer>
                <Button
                    title="Sign Up"
                />
            </Spacer>

        </>
    );

};

const styles = StyleSheet.create({});

export default SignupScreen;