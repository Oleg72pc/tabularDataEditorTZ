import {
	initActorsAC,
	addActorAC,
	deleteActorAC,
	updateActorAC,
	updateListActorsAC,
} from '../actionCreators/actorsAC';

const URL = `https://637802f30992902a25154575.mockapi.io/actors/`;

export const getActors = payload => {
	return dispatch => {
		fetch(URL)
			.then(data => data.json())
			.then(result => {
				dispatch(initActorsAC(result));
			});
	};
};

export const postActor = payload => {
	return dispatch => {
		fetch(URL, {
			headers: { 'content-type': 'application/json' },
			method: 'POST',
			body: JSON.stringify(payload),
		})
			.then(data => data.json())
			.then(result => {
				dispatch(addActorAC(result));
			});
	};
};

export const deleteActor = payload => {
	return dispatch => {
		fetch(URL + payload, {
			method: 'DELETE',
		})
			.then(data => data.json())
			.then(result => {
				dispatch(deleteActorAC(result));
			});
	};
};

export const putActor = payload => {
	return dispatch => {
		fetch(URL + payload.id, {
			headers: { 'content-type': 'application/json' },
			method: 'PUT',
			body: JSON.stringify(payload),
		})
			.then(data => data.json())
			.then(result => {
				dispatch(updateActorAC(result));
			});
	};
};

export const patchActors = payload => {
	return dispatch => {
		dispatch(updateListActorsAC(payload));
	};
};
