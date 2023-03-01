import { combineReducers } from 'redux';
import { actorsReducer } from './actorsReducer';

export const rootReducer = combineReducers({
	actorsRed: actorsReducer,
});
