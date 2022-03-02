import { connect } from "react-redux";
import { removeFromFavoritesList } from "../../app/actions/favorites_list";
import FavoritesList from "./favorites_list";
import { FavoritesState, Quote } from "./favorites_list.modules";

interface StateProps {
    favoritesList: Quote[]
}

interface DispatchProps {
    removeFromFavoritesList: typeof removeFromFavoritesList
}

export interface FavoritesListProps extends StateProps, DispatchProps {}

function mapStateToProps(state: FavoritesState): StateProps {
    const favoritesList = state.favoritesList.favoritesList;
    return {favoritesList}
}

const dispatchActions: DispatchProps = {
    removeFromFavoritesList
}

export const FavoritesListContainer = connect<StateProps, DispatchProps, {}, FavoritesState>(mapStateToProps, dispatchActions)(FavoritesList);



