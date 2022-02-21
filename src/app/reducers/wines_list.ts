import { combineReducers } from "@reduxjs/toolkit";
import { Quote } from "../../modules/quotes_list/quotes_list.modules";
import { 
    GET_QUOTES_LIST_REQUEST,
    GET_QUOTES_LIST_REQUEST_SUCCESS,
    GET_QUOTES_LIST_REQUEST_ERROR, 
    GetQuotesListRequestSuccessAction} from "../actions/wines_list";


function isFetchingQuotes(state = false, action: any): boolean {
    switch(action.type) {
        case GET_QUOTES_LIST_REQUEST: 
            return true
        case GET_QUOTES_LIST_REQUEST_SUCCESS:
        case GET_QUOTES_LIST_REQUEST_ERROR:
            return false
    }
    return state
}

function quotesListHasError(state = false, action: any): boolean {
    switch(action.type) {
        case GET_QUOTES_LIST_REQUEST: 
        case GET_QUOTES_LIST_REQUEST_SUCCESS:
            return false;
        case GET_QUOTES_LIST_REQUEST_ERROR:
            return true;
    }
    return state
}

function quotesList(state: Quote[] = [], action: any): Quote[] {
    switch(action.type) {
        case GET_QUOTES_LIST_REQUEST_SUCCESS: {
            const successAction = action as GetQuotesListRequestSuccessAction
            return {
                ...state,
                ...successAction.response
            }
        }      
    }
    return state
}

export const quotesListReducers = combineReducers({
    isFetchingQuotes,
    quotesListHasError,
    quotesList
})