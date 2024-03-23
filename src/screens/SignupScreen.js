import React from "react";
import {View, StyleSheet} from "react-native";
import { Text, Input, Button } from '@rneui/themed';
import Spacer from "../components/Spacer";

const SignupScreen = ({navigation}) => {

    return(
        <View style={styles.container}>

            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>

            <Spacer/>


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

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SignupScreen;