import { createConstants } from '../../utils/constantCreator';

const ACTION = createConstants('OPEN_DRAWER', 'CLOSE_DRAWER');

export const openDrawer = () => ({ type: ACTION.OPEN_DRAWER });

export const closeDrawer = () => ({ type: ACTION.CLOSE_DRAWER });

const INITIAL_STATE = { isOpen: false };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION.OPEN_DRAWER:
            return { ...state, isOpen: true };

        case ACTION.CLOSE_DRAWER:
            return INITIAL_STATE;

        default:
            return state;
    }
}