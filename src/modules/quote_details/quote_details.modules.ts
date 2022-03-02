export interface Quote {
    id: string,
    quote: string,
    character: string,
    image: string,
    characterDirection: string,
    isFavorite: boolean
}

export interface QuoteDetailsState {
    quote: Quote,
    favoritesList: Quote[]
}