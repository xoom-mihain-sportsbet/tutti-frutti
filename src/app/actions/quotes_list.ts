import { Quote } from "../../modules/quotes_list/quotes_list.modules";
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
export const getQuotesListRequestSuccess = (response: Quote[] = [{"quote":"I used to be with it. But then they changed what it was. Now what I'm with isn't it, and what's it seems scary and wierd. It'll happen to you.","character":"Abe Simpson","image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593","characterDirection":"Right"}]): GetQuotesListRequestSuccessAction  =>  ({
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
			dispatch(getQuotesListRequestSuccess(response))
		},
        dispatch(getQuotesListRequestError)
    );
}
