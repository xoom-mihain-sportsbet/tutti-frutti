export interface FavoritesState {
    favoritesReducers: {
        favoritesList: Quote[]
    }
}

export interface Quote {
    index: string,
    quote: string,
    character: string,
    image: string,
    characterDirection: string,
}