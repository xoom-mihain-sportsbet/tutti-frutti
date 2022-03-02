import { connect } from "react-redux";
import QuotesList from "./quotes_list";
import { Quote } from "./quotes_list.modules";
import { getQuotesListFromAPI } from "../../app/actions/quotes_list";
import { addQuoteToFavoritesList, removeFromFavoritesList } from "../../app/actions/favorites_list";
import { RootState } from "../../app/store";

interface StateProps {
    quotesList: Quote[]
    isFetchingQuotes: boolean
    quotesListHasError: boolean
    favoritesList: Quote[]
}

interface DispatchProps {
    getQuotesListFromAPI: typeof getQuotesListFromAPI
    addQuoteToFavoritesList: typeof addQuoteToFavoritesList
    removeFromFavoritesList: typeof removeFromFavoritesList
}

export interface QuotesListProps extends StateProps, DispatchProps {}

function mapStateToProps(state: RootState ): StateProps {
    const {quotesListReducers: {quotesList, isFetchingQuotes, quotesListHasError}, favoritesListReducers: {favoritesList}} = state;
    return {quotesList, isFetchingQuotes, quotesListHasError, favoritesList}
}

const dispatchActions: DispatchProps = {
    getQuotesListFromAPI,
    addQuoteToFavoritesList,
    removeFromFavoritesList
}

export const QuotesContainer = connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, dispatchActions)(QuotesList);