import React from 'react';
import { useSelector } from 'react-redux';
import { style } from 'typestyle';
import { QuotesListProps } from '../quotes_list/quotes_list.container';

const titleStyle = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
})
  

export const QuotesDetails: React.FunctionComponent<any> = match => {
  const {quoteCharacter} = match.params;

  // const quoteToDisplay: any = useSelector((state) =>
  //   state.find((quote: { character: any; }) => quote.character = quoteCharacter))
    
    // if (!quoteToDisplay) {
    //   return (
    //     <section>
    //       <h2>Quote not found!</h2>
    //     </section>
    //   )
    // }
  
    return (
      <section>
        <article>
          {/* <h2>{quoteToDisplay.character}</h2>
          <p className="quote-content">{quoteToDisplay.quote}</p>
          <img src={quoteToDisplay.image}/> */}
        </article>
      </section>
    )
}

export default QuotesDetails;
