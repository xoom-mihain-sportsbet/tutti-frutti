import React from 'react';
import { style } from 'typestyle';

const titleStyle = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
})
  

function favoritesList() {
  return (
    <div>
      <header className={titleStyle}>
        Favorites List
      </header>
    </div>
  );
}

export default favoritesList;
