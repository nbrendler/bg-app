import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducer';
import App from './App.jsx';
import GameList from './GameListPage.jsx';
import GameDetail from './GameDetailPage.jsx';

const logger = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production'
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={GameList} />
        <Route path="games/:gameId" component={GameDetail} />
      </Route>
    </Router>
  </Provider>
), document.querySelector("#app"));
