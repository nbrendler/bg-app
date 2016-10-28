export const defaultState = {
  games: [],
  loading: false
};

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case 'CLEAR_GAMES':
      newState.games = [];
      return newState;
    case 'REQUEST_GAMES':
      newState.loading = true;
      return newState;
    case 'RECEIVE_GAMES':
      newState.loading = false;
      newState.games = action.games;
      return newState;
    default:
      return state;
  }
};
