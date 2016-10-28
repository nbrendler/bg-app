import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import GameListView from './GameListView';

import {fetchGameList} from './actions';

export class GameListPage extends Component {
  componentWillMount() {
    this.props.fetchGameList();
  }

  render() {
    return <GameListView games={this.props.games} />;
  }
}

export default connect(
  state => ({
    games: state.games
  }),
  dispatch => ({
    fetchGameList: bindActionCreators(fetchGameList, dispatch)
  })
)(GameListPage);
