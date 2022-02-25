import { connect, useSelector } from "react-redux";
import { QuoteDetails } from "./quote_details";
import { Quote, QuoteDetailsState } from "./quote_details.modules";
import { QuoteState } from "../quotes_list/quotes_list.modules";
import { useParams } from "react-router-dom";

interface StateProps {
    quote: Quote
}

interface DispatchProps {
    getQuoteFromState: typeof getQuoteFromState
}

export interface QuoteDetailsProps extends StateProps, DispatchProps {}

function GetQuotesList(): Quote[] {
    return useSelector((state: QuoteState) => state.quotesListReducers.quotesList);
}

function GetParamId(): string | undefined {
    let quoteParamsId = useParams();
    return quoteParamsId.id;
}

function getQuoteFromState(quotesList: Quote[], quoteIndex: string){
    return quotesList.find((quote) => quote.index == quoteIndex);
}

function mapStateToProps(state: QuoteDetailsState): StateProps {
    let quoteList = GetQuotesList();
    let quoteId = GetParamId();
    const quote = getQuoteFromState(quoteList, quoteId!)!;
    return {quote}
}

const dispatchActions: DispatchProps = {
    getQuoteFromState
}

export const QuoteDetailsContainer = connect<StateProps, DispatchProps, {}, QuoteDetailsState>(mapStateToProps, dispatchActions)(QuoteDetails);


