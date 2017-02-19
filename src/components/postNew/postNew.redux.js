import { createConstants } from '../../utils/constantCreator';
import axios from 'axios';

const ACTION = createConstants('POST_NEW');
const URL = 'http://localhost:8000/api/posts';

export function createPost(data) {
    const request = axios.post(URL, data);

    return {
        type: ACTION.POST_NEW,
        payload: request
    }
}

const INITIAL_STATE = {
    post: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case ACTION.POST_NEW:
            return { ...state, post: action.payload.data };

        default:
            return state;
    }
}

