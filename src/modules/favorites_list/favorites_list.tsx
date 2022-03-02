import React from 'react';
import { media, style } from 'typestyle';
import FavoritesCards from './favorites_cards';
import { FavoritesListProps } from './favorites_list.container';

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

const cardAria = style({
  marginTop: "3%",
  display: 'flex',
  justifyContent: 'center',
})


export const FavoritesList: React.FunctionComponent<FavoritesListProps> = (props) => {

  return (
    <div className={pageStyle}>
      <header className={titleStyle}>
        Favorites List
      </header>
      <div>
        <div className={cardAria}>
          <div className="container-fluid row ml-5">
            {props.favoritesList.map((item) => {
              return(
                <FavoritesCards   
                key={item.id} 
                quote={item}
                removeFromFavoritesList={props.removeFromFavoritesList}
              />
            )})}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritesList;
