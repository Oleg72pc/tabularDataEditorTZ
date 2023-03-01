import {
	INIT_ACTORS,
	ADD_ACTOR,
	DELETE_ACTOR,
	UPDATE_ACTOR,
	UPDATE_LIST,
} from '../actionTypes/actorsAT';

const initialState = {
	actors: [],
};

export const actorsReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_ACTORS:
			return {
				...state,
				actors: action.payload,
			};
		case ADD_ACTOR:
			return {
				...state,
				actors: [...state.actors, action.payload],
			};
		case DELETE_ACTOR:
			return {
				...state,
				actors: [
					...state.actors.filter(actor => actor.id !== action.payload.id),
				],
			};
		case UPDATE_ACTOR:
			return {
				actors: [
					...state.actors.map(actor =>
						actor.id === action.payload.id ? action.payload : actor
					),
				],
			};
		case UPDATE_LIST:
			return {
				...state,
				actors: action.payload,
			};

		default:
			return state;
	}
};
