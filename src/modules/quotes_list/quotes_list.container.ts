import { connect } from "react-redux";
import QuotesList from "./quotes_list";
import { Quote, QuoteState } from "./quotes_list.modules";
import { getQuotesListFromAPI } from "../../app/actions/quotes_list";

interface StateProps {
    quotesList: Quote[]
    isFetchingQuotes: boolean
    quotesListHasError: boolean
}

interface DispatchProps {
    getQuotesListFromAPI: typeof getQuotesListFromAPI
}

export interface QuotesListProps extends StateProps, DispatchProps {}

function mapStateToProps(state: QuoteState): StateProps {
    const {quotesList, isFetchingQuotes, quotesListHasError} = state.quotesListReducers
    return {quotesList, isFetchingQuotes, quotesListHasError}
}

const dispatchActions: DispatchProps = {
    getQuotesListFromAPI
}

export const QuotesContainer = connect<StateProps, DispatchProps, {}, QuoteState>(mapStateToProps, dispatchActions)(QuotesList);