import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Button} from "react-native";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function AuthStack() {
    return (

        <Stack.Navigator
            screenOptions={{
                headerTitle: ""
            }}
        >

            <Stack.Screen name="Signup" component={SignupScreen} />

            <Stack.Screen name="Signin" component={SigninScreen} />

        </Stack.Navigator>

    );
}

function TracksStack() {
    return (

        <Stack.Navigator
            initialRouteName="TracksList"
        >

            <Stack.Screen
                name="TrackList"
                component={TrackListScreen}
                options={{
                    headerTitle: "Tracks",
                    headerLeft: null
                }}
            />

            <Stack.Screen
                name="TrackDetail"
                component={TrackDetailScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.goBack()}
                            title="< Back"
                            color="#006ee6"
                        />
                    ),
                    headerTitle: ''
                })}
            />

        </Stack.Navigator>

    );
}

function AppTabs() {
    return (
        <Tab.Navigator
        >

            <Tab.Screen name="Tracks" component={TracksStack} />

            <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />

            <Tab.Screen name="Account" component={AccountScreen} />

        </Tab.Navigator>

    );
}

export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    animationEnabled: false,
                    headerShown: false
                }}
                initialRouteName="Auth"
            >

                <Stack.Screen
                    name="Auth"
                    component={AuthStack}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="App"
                    component={AppTabs}
                    options={{
                        headerShown: false
                    }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    );
}
