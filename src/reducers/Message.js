import * as types from './../constants/ActionType';
import * as MessageString from './../constants/Message';

var initialState = MessageString.MSG_WELCOME;

const Message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default:
            return state;
    }
}

export default Message;