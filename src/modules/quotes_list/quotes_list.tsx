import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';
import { QuotesListProps } from './quotes_list.container';
import { Quote } from './quotes_list.modules';

const pageStyle = style({
  marginTop: "3%",
  marginLeft: '15%',
  marginInlineStart: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const titleStyle = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
})

const cardAria = style({
  marginTop: "5%",
  display: 'flex',
  justifyContent: 'center',
  
})
  
export const QuotesList: React.FunctionComponent<QuotesListProps> = props => {
  const [quotesLost, setQuotesList] = useState<Quote[]>([]);

  React.useEffect(() => {
    if(!props.isFetchingQuotes) {
      props.getQuotesListFromAPI();
      console.log("Array of wines: ", props.quotesList);
    }
  }, [])

  var hardcodedArray = 10;

  return (
    <div className={pageStyle}>
      <header className={titleStyle}>
        Simpsons Quotes
      </header>
  
      <div className={cardAria}>
        <div className="card-group">
          {Array(hardcodedArray).join(".").split(".").map((item, index) => {
            return (
              <div key={index} className="col-sm-6 col-md-4 col-lg-2 md-ml-5">
                <div className="card border-info" style={{width: '10rem'}}>
                  <div className="card-body">
                    <h5 className="card-title">Character</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Quote</h6>
                    <Link to="details/:id:" className="btn btn-info">Quote Details</Link>
                  </div>
                </div>
              </div> 
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default QuotesList;