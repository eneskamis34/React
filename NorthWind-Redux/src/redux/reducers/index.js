import {combineReducers} from 'redux';
import changeCategoryReducer from './changeCategoryReducer';

const rootReducer = combineReducers({
    changeCategoryReducer // changeCategoryReducer: changeCategoryReducer, aynı diye tek yazıldı
});

export default rootReducer;