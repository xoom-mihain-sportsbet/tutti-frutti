export interface QuoteState {
    quotesListReducers: {
        quotesList: Quote[]
        isFetchingQuotes: boolean
        quotesListHasError: boolean
    }
}

export interface Quote {
    index: string,
    quote: string,
    character: string,
    image: string,
    characterDirection: string,
}

export interface QuotesCardsInterface {
    quote: Quote
}