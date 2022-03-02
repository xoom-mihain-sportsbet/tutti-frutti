import {combineReducers } from "@reduxjs/toolkit"
import { Quote } from "../../modules/quotes_list/quotes_list.modules"
import * as actions from "../actions/favorites_list";
import { isQuoteInFavoritesList } from "../business_logic";

const initialState: Quote[] = [];

function favoritesList(state = initialState, action: any): Quote[] {
    switch(action.type) {
        case actions.ADD_QUOTE_TO_FAVORITES: {
            return [
                ...state, 
                action.quoteToAdd
            ]
        }

        case actions.REMOVE_QUOTE_FROM_FAVORITES: 
            return state.filter((quote) => quote.character !== action.character && quote.quote !== action.quote)
    }
    return state    
}

export const favoritesListReducers = combineReducers({
    favoritesList,
})