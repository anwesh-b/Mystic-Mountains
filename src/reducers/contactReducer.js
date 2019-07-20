import { SEND_CONTACT_MESSAGE } from '../actions/types';

const initialState = {
    msg: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEND_CONTACT_MESSAGE:
            return {
                ...state,
                msg: action.payload
            };
        default:
            return state;
    }
}
