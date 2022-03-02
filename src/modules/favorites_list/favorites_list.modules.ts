export interface FavoritesState {
    favoritesList: {
        favoritesList: Quote[]
    }
}

export interface Quote {
    id: string,
    quote: string,
    character: string,
    image: string,
    characterDirection: string,
}

export interface FavoritesCardsInterface {
    quote: Quote,
    removeFromFavoritesList: (character: string, quote: string) => void
}