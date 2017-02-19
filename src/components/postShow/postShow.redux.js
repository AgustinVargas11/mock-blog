import { createConstants } from '../../utils/constantCreator';
import axios from 'axios';

const ACTION = createConstants('FETCH_POST', 'DELETE_POST');
const URL = 'http://localhost:8000/api/posts';

export function fetchPost(id) {
    const request = axios.get(`${URL}/${id}`);

    return {
        type: ACTION.FETCH_POST,
        payload: request
    }
}

export function deletePost(id) {
    const request = axios.delete(`${URL}/${id}`);

    return {
        type: ACTION.DELETE_POST,
        payload: request
    }
}

const INITIAL_STATE = {
    post: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case ACTION.FETCH_POST:
            return { ...state, post: action.payload.data };

        default:
            return state;
    }
}

