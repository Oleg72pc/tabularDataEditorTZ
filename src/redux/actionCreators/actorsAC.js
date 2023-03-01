import {
	INIT_ACTORS,
	ADD_ACTOR,
	DELETE_ACTOR,
	UPDATE_ACTOR,
	UPDATE_LIST,
} from '../actionTypes/actorsAT';

export const initActorsAC = payload => {
	return {
		type: INIT_ACTORS,
		payload,
	};
};
export const addActorAC = payload => {
	return {
		type: ADD_ACTOR,
		payload,
	};
};
export const deleteActorAC = payload => {
	return {
		type: DELETE_ACTOR,
		payload,
	};
};
export const updateActorAC = payload => {
	return {
		type: UPDATE_ACTOR,
		payload,
	};
};
export const updateListActorsAC = payload => {
	return {
		type: UPDATE_LIST,
		payload,
	};
};
