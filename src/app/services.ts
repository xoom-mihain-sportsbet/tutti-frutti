import {Quote} from '../modules/quotes_list/quotes_list.modules';

const API_BASE_URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';
const GET_FIRST_TEN_QUOTES_URL = '?count=10'

export default async function getQuotesHttpRequest(): Promise<Quote[]> {
    return fetch(`${API_BASE_URL}${GET_FIRST_TEN_QUOTES_URL}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        mode: 'no-cors'
    })
    .then(response => response.json())
    .catch(() => {});
}
