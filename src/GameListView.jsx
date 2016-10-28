import React from 'react';

export default (props) => (
  <div>
    <ul>
    {
      props.games.map((game, i) => {
        return (
          <li key={i}>{game.name}</li>
        );
      })
    }
    </ul>
  </div>
);
