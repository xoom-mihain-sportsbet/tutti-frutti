import { connect } from "react-redux";
import { QuoteDetails } from "./quote_details";
import { Quote } from "./quote_details.modules";
import { RootState } from "../../app/store";
import { addQuoteToFavoritesList, removeFromFavoritesList } from "../../app/actions/favorites_list";

interface StateProps {
    quote: Quote
    favoritesList: Quote[]
}

interface DispatchProps {
    addQuoteToFavoritesList: typeof addQuoteToFavoritesList
    removeFromFavoritesList: typeof removeFromFavoritesList
}

export interface QuoteDetailsProps extends StateProps, DispatchProps {
    id: string | undefined
}

function getQuoteFromState(quotesList: Quote[], quoteIndex: string){
    return quotesList.find((quote) => quote.id == quoteIndex)
}

function mapStateToProps(state: RootState, ownProps: any ): StateProps {
    let quoteList = state.quotesList.quotesList;
    const id = ownProps.id;
    const quote = getQuoteFromState(quoteList, id)!
    const{favoritesList} = state.favoritesList;
    return {quote, favoritesList}
}

const dispatchActions: DispatchProps = {
    addQuoteToFavoritesList,
    removeFromFavoritesList
}

export const QuoteDetailsContainer = connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, dispatchActions)(QuoteDetails)


