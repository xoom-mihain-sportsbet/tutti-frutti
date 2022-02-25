import { combineReducers } from "@reduxjs/toolkit";
import { Quote } from "../../modules/quotes_list/quotes_list.modules";
import * as actions from "../actions/quotes_list";


function isFetchingQuotes(state = false, action: any): boolean {
    switch(action.type) {
        case actions.GET_QUOTES_LIST_REQUEST: 
            return true
        case actions.GET_QUOTES_LIST_REQUEST_SUCCESS:
        case actions.GET_QUOTES_LIST_REQUEST_ERROR:
            return false
    }
    return state
}

function quotesListHasError(state = false, action: any): boolean {
    switch(action.type) {
        case actions.GET_QUOTES_LIST_REQUEST: 
        case actions.GET_QUOTES_LIST_REQUEST_SUCCESS:
            return false;
        case actions.GET_QUOTES_LIST_REQUEST_ERROR:
            return true;
    }
    return state
}

function quotesList(state: Quote[] = [], action: any): Quote[] {
    switch(action.type) {
        case actions.GET_QUOTES_LIST_REQUEST_SUCCESS: {
            const successAction = action as actions.GetQuotesListRequestSuccessAction      
            return [
                ...successAction.response
            ]
        }  
    }
    return state    
}

export const quotesListReducers = combineReducers({
    isFetchingQuotes,
    quotesListHasError,
    quotesList
})