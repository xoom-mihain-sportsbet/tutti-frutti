import { Quote } from "../../modules/quotes_list/quotes_list.modules";

export const ADD_QUOTE_TO_FAVORITES = "ADD_QUOTE_TO_FAVORITES";
export const REMOVE_QUOTE_FROM_FAVORITES = "REMOVE_QUOTE_FROM_FAVORITES";
export const GET_FAVORITES_LIST_REQUEST = "GET_FAVORITES_LIST_REQUEST";

export const addQuoteToFavoritesList = (quoteToAdd: Quote): any => ({
    type: ADD_QUOTE_TO_FAVORITES,
    quoteToAdd
})

export const removeFromFavoritesList = (character: string, quote: string): any => ({
    type: REMOVE_QUOTE_FROM_FAVORITES,
    character,
    quote
})