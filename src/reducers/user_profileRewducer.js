import {
    CREATE_USER_PROFILE
} from '../actions/types';

const initialState = {
    msg: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case
            CREATE_USER_PROFILE:
            return {
                ...state,
                msg: action.payload
            };
        default:
            return state;
    }
}
