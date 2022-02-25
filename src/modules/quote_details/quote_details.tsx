 import { set } from 'immer/dist/internal';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { style } from 'typestyle';
import { QuoteDetailsProps } from './quote_details.container';

const titleStyle = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
})
  

export const QuoteDetails: React.FunctionComponent<QuoteDetailsProps> = (props) => {
  let quoteToDisplay = props.quote;

    return (
      <section>
  
          <h3 className={titleStyle}>Quote Details</h3>
          <p className={titleStyle}>{quoteToDisplay.quote}</p>
          <p className={titleStyle}>{quoteToDisplay.character}</p>
          <img alt='quote representive image' src={quoteToDisplay.image} className={titleStyle}/>
          <p>{quoteToDisplay.characterDirection}</p>
      </section>
    )
}

export default QuoteDetails;
