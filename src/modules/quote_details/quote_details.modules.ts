export interface Quote {
    index: string,
    quote: string,
    character: string,
    image: string,
    characterDirection: string,
}

export interface QuoteDetailsState {
    quote: Quote
}