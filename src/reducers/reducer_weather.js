import { FETCH_WEATHER } from '../actions/index';


export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER: {
            //console.log('RECEIVED:',request);
            return [action.payload.data, ...state];
        }

    }

    return state;
}