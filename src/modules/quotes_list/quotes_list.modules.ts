export interface Quote {
    quote: string,
    character: string,
    image: string,
    characterDirection: string,
}

export interface QuoteState {
    quotesListReducers: {
        quotesList: Quote[]
        isFetchingQuotes: boolean
        quotesListHasError: boolean
    }
}