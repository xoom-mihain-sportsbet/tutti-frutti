import { connect } from "react-redux";
import FavoritesList from "./favorites_list";
import { Quote } from "./favorites_list.modules";

interface StateProps {
    favoritesList: Quote[]
}

interface DispatchProps {
  
}

export interface FavoritesListProps extends StateProps, DispatchProps {}

function mapStateToProps(state: FavoritesListProps): StateProps {
    const favoritesList: Quote[] = [];
    return {favoritesList}
}

const dispatchActions: DispatchProps = {
   
}

export const FavoritesListContainer = connect<StateProps, DispatchProps, {}, FavoritesListProps>(mapStateToProps, dispatchActions)(FavoritesList);



