import { combineReducers } from "@reduxjs/toolkit";
import { Fruit } from "../../modules/fruits_list/fruits_list.modules";
import { 
    GET_FRUITS_LIST_REQUEST,
    GET_FRUITS_LIST_REQUEST_SUCCESS,
    GET_FRUITS_LIST_REQUEST_ERROR, 
    GetFruitsListRequestSuccessAction} from "../actions/fruits_list";


function isFetchingFruits(state = false, action: any): boolean {
    switch(action.type) {
        case GET_FRUITS_LIST_REQUEST: 
            return true
        case GET_FRUITS_LIST_REQUEST_SUCCESS:
        case GET_FRUITS_LIST_REQUEST_ERROR:
            return false
    }
    return state
}

function fruitsListHasError(state = false, action: any): boolean {
    switch(action.type) {
        case GET_FRUITS_LIST_REQUEST: 
        case GET_FRUITS_LIST_REQUEST_SUCCESS:
            return false;
        case GET_FRUITS_LIST_REQUEST_ERROR:
            return true;
    }
    return state
}

function fruitsList(state: Fruit[] = [], action: any): Fruit[] {
    switch(action.type) {
        case GET_FRUITS_LIST_REQUEST_SUCCESS: {
            const successAction = action as GetFruitsListRequestSuccessAction
            return {
                ...state,
                ...successAction.response
            }
        }      
    }
    return state
}

export const fruitsListReducers = combineReducers({
    isFetchingFruits,
    fruitsListHasError,
    fruitsList
})