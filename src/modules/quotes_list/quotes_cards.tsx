import React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';
import { QuotesListProps } from './quotes_list.container';

const cardAria = style({
    marginTop: "5%",
    display: 'flex',
    justifyContent: 'center',
})

const quotesContent = style({
    whiteSpace: 'nowrap',
    width: '140px',
    overflow: 'hidden',
    textOverflow: 'ellipsis' 
})

const quotesCharacter = style({
    overflowWrap: 'break-word',
})
  
export const QuotesCards: React.FunctionComponent<QuotesListProps> = (props) => {
    const quotesList = Object.keys(props.quotesList).map((quoteFromObject: any) => {
        let quote = props.quotesList[quoteFromObject];
        return quote
    })
    
  return (
    <div className={cardAria}>
        <div className="card-group ml-5">
            {quotesList.map((item, index) => {
                return (
                    <div key={index} className="col-sm-6 col-md-4 col-lg-2 md-ml-5 d-flex align-items-stretch mt-5">
                    <div className="card border-info d-flex align-items-stretch" style={{width: '10rem'}}>
                        <div className="card-body align-items-stretch">
                        <h5 className="card-title align-items-stretch"><p className={quotesCharacter}>{item.character}</p></h5>
                        <h6 className="card-subtitle mb-2 text-muted d-flex align-items-stretch"><p className={quotesContent}>{item.quote}</p></h6>
                        <Link to={`details/${item.character}`} className="btn btn-info d-flex align-items-stretch" >Quote Details</Link>
                        </div>
                    </div>
                    </div> 
                )
            })}
        </div>
    </div>
  );
}

export default QuotesCards;