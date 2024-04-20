import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import * as SecureStore from 'expo-secure-store';
import * as RootNavigation from '../RootNavigation';



const INITIAL_STATE = {
    token: null,
    errorMessage: ''
};

const authReducer = (state, action) => {

    switch(action.type){
        case 'signin':
            return{
                ...state,
                token: action.payload
            };
        case 'add_error':
            return{
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }

};

const signup = (dispatch) => {

    return async ({email, password}) => {

        try{

            dispatch({type: 'add_error', payload: ''});

            const response = await trackerApi.post("/signup", {email, password});

            const token = response.data.token;

            await SecureStore.setItemAsync('token', token);

            dispatch({type: 'signin', payload: token});

            RootNavigation.navigate('App');



        }catch(err){

            console.log(err);

            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});

        }

    };

};


const signin = (dispatch) => {

    return async ({email, password}) => {

        try{

            dispatch({type: 'add_error', payload: ''});

            const response = await trackerApi.post('/signin', {email, password});

            const token = response.data.token;

            await SecureStore.setItemAsync('token', token);

            dispatch({type: 'signin', payload: token});

            RootNavigation.navigate('App');


        }catch(err){

            console.log(err);

            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign in'
            });

        }

    };

};


const signout = (dispatch) => {

    return () => {

    };

};


export const {Provider, Context} = createDataContext(
    authReducer,
    {
        signup,
        signin,
        signout
    },
    INITIAL_STATE
);