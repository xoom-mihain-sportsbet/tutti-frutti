import React from 'react';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { media, style } from 'typestyle';
import { isQuoteInFavoritesList } from '../../app/business_logic';
import { QuoteDetailsProps } from './quote_details.container';

const contentStyle = style({
  marginTop: '5%',
  marginLeft: '30%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
},
media(
  {maxWidth: '570px',}, 
  {marginTop: '10%'})
)

const titleStyle = style({
  marginTop: '3%',
  marginLeft: '10%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
},
media(
  {maxWidth: '570px',}, 
  {marginLeft: '30%'})
)

const imageStyle = style({
  marginTop: '2%'
})
  
export const QuoteDetails: React.FunctionComponent<QuoteDetailsProps> = (props) => {
  let quoteToDisplay = props.quote;

  return (

  <div>
    <header className={titleStyle}>
      Quote Details
    </header>
    <div className={contentStyle}>
      { isQuoteInFavoritesList(quoteToDisplay, props.favoritesList) ? (
            <IoIosHeart style={{color: 'red', fontSize: '24px', marginLeft: '80%', marginTop: '2%'}} 
                onClick={() => props.removeFromFavoritesList(quoteToDisplay.character, quoteToDisplay.quote)}
            />
          ) : (
            <IoIosHeartEmpty style={{color: 'red', fontSize: '24px', marginLeft: '80%', marginTop: '2%'}}
                onClick={() => props.addQuoteToFavoritesList(quoteToDisplay)}
            />
          )
      }
      <div className="container-fluid">
        <div className="row">
          <h6 className="col-sm-3 col-xl-3 text-muted">Character</h6>
          <div className="col-sm-9 col-xl-7 font-weight-bold">{quoteToDisplay.character}</div>
        </div>

        <div className="row">
          <h6 className="col-sm-3 col-xl-3 text-muted">Quote</h6>
          <div className="col-sm-9 col-xl-7 font-italic">{quoteToDisplay.quote}</div>
        </div>

        <div className='row'>
          <div className="col-sm-9 col-xl-9">
            <img alt='quote' src={quoteToDisplay.image} className={imageStyle}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default QuoteDetails;
