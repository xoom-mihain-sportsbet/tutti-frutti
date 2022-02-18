import {Fruit} from '../modules/fruits_list/fruits_list.modules';

const API_BASE_URL = 'https://www.fruityvice.com';
const GET_ALL_FRUITS_URL = '/api/fruit/all';

export default function getAllFruitsHttpRequest(): Promise<Fruit[]> {
    return fetch(`${API_BASE_URL}${GET_ALL_FRUITS_URL}`, {
        mode: 'no-cors',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    .catch(console.error);
}