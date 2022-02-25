import React, { useState } from 'react';
import { media, style } from 'typestyle';
import { QuotesListProps } from './quotes_list.container';
import { TailSpin } from 'react-loader-spinner';
import QuotesCards from './quotes_cards';

const pageStyle = style({
  marginTop: "3%",
  marginLeft: '16%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const titleStyle = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
},
media(
  {maxWidth: '570px',}, 
  {marginLeft: '16%'})
)

const loadingStyle = style({ 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '10%'
})

const cardAria = style({
  marginTop: "3%",
  display: 'flex',
  justifyContent: 'center',
})


export const QuotesList: React.FunctionComponent<QuotesListProps> = props => {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    props.getQuotesListFromAPI();
  }, []);

  React.useEffect(() => {
    setIsLoading(props.isFetchingQuotes);
  }, [props.isFetchingQuotes])

  return (
    <div className={pageStyle}>
      <header className={titleStyle}>
        Simpsons Quotes
      </header>

      <div>
        {isLoading ? 
        (
        <div className={loadingStyle}>
            <TailSpin color="#00ab9a" height={50} width={50}/>
            <p>Loading...</p>
        </div>
        ) :
        (
        <div className={cardAria}>
          <div className="card-group ml-5">
            {props.quotesList.map((item) => {
              return(
                <QuotesCards key={item.index} quote={item}/>
              )
            })}
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default QuotesList;