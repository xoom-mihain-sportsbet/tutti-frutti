import React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';
import { QuotesCardsInterface } from './quotes_list.modules';

const quotesContent = style({
    whiteSpace: 'nowrap',
    width: '140px',
    overflow: 'hidden',
    textOverflow: 'ellipsis' 
})

const quotesCharacter = style({
    overflowWrap: 'break-word',
})
  
const QuotesCards: React.FunctionComponent<QuotesCardsInterface> = (props) => {    
  return (
    <div key={props.index} className="col-sm-6 col-md-4 col-lg-2 md-ml-5 d-flex align-items-stretch mt-5">
        <div className="card border-info d-flex align-items-stretch" style={{width: '10rem'}}>
            <div className="card-body align-items-stretch">
            <h5 className="card-title align-items-stretch"><p className={quotesCharacter}>{props.quote.character}</p></h5>
            <h6 className="card-subtitle mb-2 text-muted d-flex align-items-stretch"><p className={quotesContent}>{props.quote.quote}</p></h6>
            <Link to={`details/${props.quote.index}`} className="btn btn-info d-flex align-items-stretch" >Quote Details</Link>
            </div>
        </div>
    </div> 
  );
}

export default QuotesCards;