import React from "react";
import {View, StyleSheet, Text, Button} from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({navigation}) => {

    return(
        <View style={styles.container}>

            <AuthForm
                headerText="Sign In To Your Account"
                errorMessage=""
                onSubmit={() => {}}
                submitButtonText="Sign In"
            />

            <NavLink
                text="Dont have an account? Sign Up"
                routeName="Signup"
            />
            
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

export default SigninScreen;