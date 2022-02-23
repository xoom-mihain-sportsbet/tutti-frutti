import React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';
import { QuotesListProps } from './quotes_list.container';
import { TailSpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { QuoteState } from './quotes_list.modules';
import QuotesCards from './quotes_cards';

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

const loadingStyle = style({ 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '10%'
})

export const QuotesList: React.FunctionComponent<QuotesListProps> = props => {
  const loading = useSelector((state: QuoteState) => state.quotesListReducers.isFetchingQuotes)
  const error = useSelector((state: QuoteState) => state.quotesListReducers.quotesListHasError)

  React.useEffect(() => {
      props.getQuotesListFromAPI();
  }, []);

  return (
    <div className={pageStyle}>
      <header className={titleStyle}>
        Simpsons Quotes
      </header>

      <div>
        {loading && 
          (<div className={loadingStyle}>
              <TailSpin color="#00ab9a" height={50} width={50}/>
              <p>Loading...</p>
          </div>
          )}
        {/* {error && (<div>Something went wrong</div>)}  */}
        {!loading && 
          <QuotesCards 
            quotesList={props.quotesList} 
            quotesListHasError={props.quotesListHasError}
            getQuotesListFromAPI = {props.getQuotesListFromAPI}
            isFetchingQuotes = {props.isFetchingQuotes}
          />
        }
      </div>
    </div>
  );
}

export default QuotesList;