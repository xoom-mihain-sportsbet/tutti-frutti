import { Quote } from "../modules/quotes_list/quotes_list.modules";

export default function addingIndexToQuoteObject(httpResponse: any): Quote[] {
    const quotesList = Object.keys(httpResponse).map((quoteFromObject: any, index) => {
        let newQuoteObject = httpResponse[quoteFromObject];
        newQuoteObject.index = index;
        return newQuoteObject
    });
    return quotesList;
}
