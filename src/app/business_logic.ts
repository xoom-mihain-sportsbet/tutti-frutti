import { Quote } from "../modules/quotes_list/quotes_list.modules";
import uniqid from 'uniqid';

export default function addingIndexToQuote(httpResponse: any): Quote[] {
    return Object.keys(httpResponse).map((quoteFromObject: any) => ({
        ...httpResponse[quoteFromObject],
        id: uniqid()
    }));
}

export function isQuoteInFavoritesList(selectedQuote: Quote, quoteList: Quote[]): boolean {
    return quoteList.filter((quote) => quote.character === selectedQuote.character && quote.quote === selectedQuote.quote).length > 0;
}

export function processQuoteList(favoriteQuoteList: Quote[], quoteList: Quote[]): Quote[] {
     return quoteList.map((quote) => ({
         ...quote, 
        isFavorite: isQuoteInFavoritesList(quote, favoriteQuoteList)
     }))
}