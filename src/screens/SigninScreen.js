import React, {useContext, useEffect} from "react";
import {View, StyleSheet, Text, Button} from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context} from "../context/AuthContext";

const SigninScreen = ({navigation}) => {

    const {state, signin, clearErrorMessage} = useContext(Context);

    useEffect(() => {
        const unsubscribe = navigation.addListener("blur", () => {
            clearErrorMessage();
        });

        return unsubscribe;
    }, []);


    return(
        <View style={styles.container}>

            <AuthForm
                headerText="Sign In To Your Account"
                errorMessage={state.errorMessage}
                onSubmit={signin}
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