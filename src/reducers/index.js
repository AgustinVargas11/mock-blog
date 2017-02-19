import { combineReducers } from 'redux';
import PostsReducer from '../components/postIndex/postIndex.redux';
import PostReducer from '../components/postShow/postShow.redux';
import PostNewReducer from '../components/postNew/postNew.redux';
import AppReducer from '../components/app/app.redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    app: AppReducer,
    posts: PostsReducer,
    post: PostReducer,
    postNew: PostNewReducer,
    form: formReducer
});

export default rootReducer;

