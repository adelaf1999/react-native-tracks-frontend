import createDataContext from "./createDataContext";

const INITIAL_STATE = {
    recording: false,
    locations: [],
    currentLocation: null
};

const locationReducer = (state, action) => {


    switch(action.type){
        case 'add_current_location':
            return{
              ...state,
              currentLocation: action.payload
            };
        default:
            return state;
    }

};

const startRecording = (dispatch) => {

    return () => {

    };

};

const stopRecording = (dispatch) => {

    return () => {

    };

};

const addLocation = (dispatch) => {

    return (location) => {
        console.log('Hi there!');
        dispatch({type: 'add_current_location', payload: location});
    };

};

export const {Provider, Context} = createDataContext(
    locationReducer,
    {
        startRecording,
        stopRecording,
        addLocation
    },
    INITIAL_STATE
);