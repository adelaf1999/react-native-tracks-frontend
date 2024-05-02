import createDataContext from "./createDataContext";

const INITIAL_STATE = {
};


const trackReducer = (state, action) => {


    switch(action.type){
        default:
            return state;
    }

};

const fetchTracks = (dispatch) => {

    return () => {


    };

};

const createTrack = (dispatch) => {

    return () => {


    };

};

export const {Provider, Context} = createDataContext(
    trackReducer,
    {
        fetchTracks,
        createTrack
    },
    INITIAL_STATE
)