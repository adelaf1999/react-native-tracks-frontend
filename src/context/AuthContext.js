import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import * as SecureStore from 'expo-secure-store';

const INITIAL_STATE = {
    token: null,
    errorMessage: ''
};

const authReducer = (state, action) => {

    switch(action.type){
        case 'signup':
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

            dispatch({type: 'signup', payload: token});

        }catch(err){

            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});

        }

    };

};


const signin = (dispatch) => {

    return({email, password}) => {

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