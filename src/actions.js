import 'es6-promise/auto';
import 'whatwg-fetch';

export const requestGameList = () => ({
  type: 'REQUEST_GAMES',
});

export const receiveGameList = (data) => ({
  type: 'RECEIVE_GAMES',
  games: data
});

export const fetchGameList = () => {
  return (dispatch) => {
    dispatch(requestGameList());
    return fetch('http://localhost:8080/games')
      .then(response => response.json())
      .then(json => dispatch(receiveGameList(json)))
      .catch(err => console.error(err.toString()));
  };
};
