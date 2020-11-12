import {
  CHANGE_SEARCH_FIELD,
  FETCH_ROBOTS_REQUEST,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILURE,
} from './constants.js';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

// export const fetchRobotsRequest = () => {
//     return {
//         type: FETCH_ROBOTS_REQUEST
//     }
// }

// export const fetchRobotsSuccess = users => {
//     return {
//         type: FETCH_ROBOTS_SUCCESS,
//         payload: users
//     }
// }

// export const fetchRobotsFailure = error => {
//     return {
//         type: FETCH_ROBOTS_FAILURE,
//         payload: error
//     }
// }

// ? export const fetchRobots = () => dispatch => {
//     dispatch(fetchRobotsRequest);
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             const jsonResponse = response.json()
//             dispatch(fetchRobotsSuccess(jsonResponse))
//         })
//         .catch(error => {
//             const errMsg = error.message
//             dispatch(fetchRobotsFailure(errMsg))
//         })
// }

export const fetchRobots = () => dispatch => {
  dispatch({ type: FETCH_ROBOTS_REQUEST });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: FETCH_ROBOTS_FAILURE, payload: error }));
};
