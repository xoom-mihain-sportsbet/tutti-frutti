import { useParams } from 'react-router-dom';
import { QuoteDetailsContainer } from './quote_details.container';

export function QuoteDetailsWrapper() {

    function GetParamId(): string | undefined {
        let quoteParamsId = useParams();
        return quoteParamsId.id
    }

    return (
        <div>
            <QuoteDetailsContainer id={GetParamId()}/>
        </div>
    )

}