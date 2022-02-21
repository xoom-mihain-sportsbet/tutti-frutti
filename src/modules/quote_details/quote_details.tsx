import React from 'react';
import { style } from 'typestyle';

const titleStyle = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
})
  

function quoteDetails() {
  return (
    <div>
      <header className={titleStyle}>
        Quote Details
      </header>
    </div>
  );
}

export default quoteDetails;
