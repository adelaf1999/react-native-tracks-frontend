import React, {useEffect, useContext} from "react";
import {View, StyleSheet, Text, Button, FlatList, TouchableOpacity} from "react-native";
import {Context as TrackContext} from "../context/TrackContext";
import { ListItem } from '@rneui/themed';

const TrackListScreen = ({navigation}) => {

    const {state, fetchTracks} = useContext(TrackContext);

    console.log(state);

    useEffect(() => {

        const unsubscribe = navigation.addListener("focus", () => {
            fetchTracks();
        });

        return () => {
            unsubscribe();
        };

    }, []);

    return(
        <>

            <Text style={{fontSize: 48}}>
                TrackListScreen
            </Text>

            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    );
                }}
            />



        </>
    );

};

const styles = StyleSheet.create({});

export default TrackListScreen;