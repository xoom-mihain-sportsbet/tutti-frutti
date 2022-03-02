
export interface QuoteState {
    quotesList: {
        quotesList: Quote[]
        isFetchingQuotes: boolean
        quotesListHasError: boolean
    },
    favoritesList: Quote[]
}

export interface Quote {
    isFavorite: any;
    id: string,
    quote: string,
    character: string,
    image: string,
    characterDirection: string,
}

export interface QuotesCardsInterface {
    quote: Quote
    isFavorite: boolean
    addQuoteToFavoritesList: (quote: Quote) => void
    removeFromFavoritesList: (character: string, quote: string) => void
}