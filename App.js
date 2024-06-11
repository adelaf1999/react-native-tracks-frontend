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
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import {Provider as AuthProvider} from "./src/context/AuthContext";
import {Provider as LocationProvider} from "./src/context/LocationContext";
import {Provider as TrackProvider } from "./src/context/TrackContext";
import { navigationRef } from './src/RootNavigation';
import { Icon } from '@rneui/themed';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function AuthStack() {
    return (

        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerShown: false
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
            initialRouteName="TrackList"
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
            initialRouteName="Tracks"
        >

            <Tab.Screen
                name="Tracks"
                component={TracksStack}
                options={{
                    title: 'Tracks',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name='th-list'
                            type='font-awesome'
                            size={size}
                            color={color}
                        />
                    )
            }}
            />

            <Tab.Screen
                name="TrackCreate"
                component={TrackCreateScreen}
                options={{
                    title: 'Add Track',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name='plus'
                            type='font-awesome'
                            size={size}
                            color={color}
                           />
                    ),
            }}
            />

            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    title: 'Account',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name='gear'
                            type='font-awesome'
                            size={size}
                            color={color}
                        />
                    ),
            }}
            />

        </Tab.Navigator>

    );
}

export default function App() {


    return (

        <TrackProvider>

            <LocationProvider>

                <AuthProvider>

                    <NavigationContainer
                        ref={navigationRef}
                    >

                        <Stack.Navigator
                            screenOptions={{
                                animationEnabled: false,
                                headerShown: false
                            }}
                            initialRouteName="ResolveAuthScreen"
                        >

                            <Stack.Screen
                                name="ResolveAuthScreen"
                                component={ResolveAuthScreen}
                                options={{
                                    headerShown: false
                                }}
                            />

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

                </AuthProvider>

            </LocationProvider>


        </TrackProvider>




    );
}
