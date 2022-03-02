import { Quote } from "../../modules/quotes_list/quotes_list.modules";
import addingIndexToQuote from "../business_logic";
import getQuotesHttpRequest from "../services";
import { AppThunk } from "../store";

export const GET_QUOTES_LIST_REQUEST = "GET_QUOTES_LIST_REQUEST";
export const GET_QUOTES_LIST_REQUEST_SUCCESS = "GET_QUOTES_LIST_REQUEST_SUCCESS";
export const GET_QUOTES_LIST_REQUEST_ERROR = "GET_QUOTES_LIST_REQUEST_ERROR";

export const getQuotesListRequest: any = {
    type: GET_QUOTES_LIST_REQUEST
}

export interface GetQuotesListRequestSuccessAction  {
    type: string,
    response: Quote[]
}
export const getQuotesListRequestSuccess = (response: Quote[] = []): GetQuotesListRequestSuccessAction  =>  ({
    type: GET_QUOTES_LIST_REQUEST_SUCCESS,
    response
})

export const getQuotesListRequestError: any = {
    type: GET_QUOTES_LIST_REQUEST_ERROR
}

export const getQuotesListFromAPI = (): AppThunk => (
    dispatch,
): Promise<void | GetQuotesListRequestSuccessAction | typeof getQuotesListRequestError> => {
    dispatch(getQuotesListRequest)

    return getQuotesHttpRequest().then(
		response => {
            const responseWithIndex = addingIndexToQuote(response)
			dispatch(getQuotesListRequestSuccess(responseWithIndex))
		}).catch(error => {
            dispatch(getQuotesListRequestError)
        })
}
