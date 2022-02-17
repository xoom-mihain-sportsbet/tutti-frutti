import React from 'react';
import { style } from 'typestyle';

const titleStyle = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
})
  

function fruit_details() {
  return (
    <div>
      <header className={titleStyle}>
        Fruit details
      </header>
    </div>
  );
}

export default fruit_details;
