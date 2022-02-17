import React from 'react';
import { style } from 'typestyle';

const titleStyle = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
})
  

function shoppingList() {
  return (
    <div>
      <header className={titleStyle}>
        Shopping List
      </header>
    </div>
  );
}

export default shoppingList;
