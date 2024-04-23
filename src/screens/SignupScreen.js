import React, {useContext, useEffect} from "react";
import {View, StyleSheet} from "react-native";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({navigation}) => {

    const {state, signup, clearErrorMessage, tryLocalSignIn} = useContext(AuthContext);

    useEffect(() => {

        tryLocalSignIn();

        const unsubscribe = navigation.addListener("blur", () => {
            clearErrorMessage();
        });

        return unsubscribe;
    }, []);



    return(
        <View style={styles.container}>

            <AuthForm
                headerText="Sign Up For Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />

            <NavLink
                routeName="Signin"
                text="Already have an account? Sign In"
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

export default SignupScreen;