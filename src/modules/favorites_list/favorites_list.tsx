import React from 'react';
import { style } from 'typestyle';
import { FavoritesListProps } from './favorites_list.container';

const titleStyle = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
})
  

export const FavoritesList: React.FunctionComponent<FavoritesListProps> = (props) => {
  return (
    <div>
      <header className={titleStyle}>
        Favorites List
      </header>
    </div>
  );
}

export default FavoritesList;
