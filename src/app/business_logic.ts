import { Quote } from "../modules/quotes_list/quotes_list.modules";

export default function addingIndexToQuote(httpResponse: any): Quote[] {
    return Object.keys(httpResponse).map((quoteFromObject: any, index) => ({
        ...httpResponse[quoteFromObject],
        index
    }));
}

// export function addToFavoritesList(quoteToAdd: Quote, favoritesList: Quote[]): Quote[] {
//     let addArray = true;
//     favoritesList.map((quote, index) => {
//         if(quote.quote === quoteToAdd.quote) {
//             favoritesList.splice(index, 1);
//             addArray = false
//         }
//     });

//     if (addArray) {
//         favoritesList.push(quoteToAdd);
//     }
//     return favoritesList;
// }