
import { combineReducers } from 'redux'
import challenges  from './challenges';
import userProfile  from './userProfile';

const rootReducer = combineReducers({
    challenges,
    userProfile
})

export default rootReducer
