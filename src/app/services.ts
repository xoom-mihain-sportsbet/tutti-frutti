import {Quote} from '../modules/quotes_list/quotes_list.modules';

const API_BASE_URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';
const GET_FIRST_TWELVE_QUOTES_URL = '?count=12';

export default function getQuotesHttpRequest(): Promise<Quote[]> {
    return fetch(`${API_BASE_URL}${GET_FIRST_TWELVE_QUOTES_URL}`)
    .then(response => response.json())
    .catch(() => {});
}
