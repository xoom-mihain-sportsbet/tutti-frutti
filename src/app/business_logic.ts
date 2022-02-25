import { Quote } from "../modules/quotes_list/quotes_list.modules";

export default function addingIndexToQuote(httpResponse: any): Quote[] {
    return Object.keys(httpResponse).map((quoteFromObject: any, index) => ({
        ...httpResponse[quoteFromObject],
        index
    }));
}
