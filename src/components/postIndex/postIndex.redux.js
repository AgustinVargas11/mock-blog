import { createConstants } from '../../utils/constantCreator';
import axios from 'axios';

const ACTION = createConstants('FETCH_POSTS');
const URL = 'http://localhost:8000/api/posts';

export function fetchPosts() {
    const request = axios.get(URL);

    return {
        type: ACTION.FETCH_POSTS,
        payload: request
    };
}

const INITIAL_STATE = { all: [] };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case ACTION.FETCH_POSTS:
            return { ...state, all: action.payload.data };

        default:
            return state;
    }
}