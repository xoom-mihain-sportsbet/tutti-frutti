import { Fruit } from "../../modules/fruits_list/fruits_list.modules";
import getAllFruitsHttpRequest from "../services";
import { AppThunk } from "../store";

export const GET_FRUITS_LIST_REQUEST = "GET_FRUITS_LIST_REQUEST";
export const GET_FRUITS_LIST_REQUEST_SUCCESS = "GET_FRUITS_LIST_REQUEST_SUCCESS";
export const GET_FRUITS_LIST_REQUEST_ERROR = "GET_FRUITS_LIST_REQUEST_ERROR";

export const getFruitsListRequest: any = {
    type: GET_FRUITS_LIST_REQUEST
}

export interface GetFruitsListRequestSuccessAction  {
    type: string,
    response: Fruit[]
}
export const getFruitsListRequestSuccess = (response: Fruit[]): GetFruitsListRequestSuccessAction  =>  ({
    type: GET_FRUITS_LIST_REQUEST_SUCCESS,
    response
})

export const getFruitsListRequestError: any = {
    type: GET_FRUITS_LIST_REQUEST
}

export const getFruitsListFromAPI = (): AppThunk => (
    dispatch
): Promise<void | GetFruitsListRequestSuccessAction | typeof getFruitsListRequestError> => {
    dispatch(getFruitsListRequest)

    return getAllFruitsHttpRequest().then(
		response => {
			dispatch(getFruitsListRequestSuccess(response))
		},
        dispatch(getFruitsListRequestError)
    )
}
