import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";
import NotFound from './not_found';
import SideBar from './layout';
import { QuotesContainer } from "./modules/quotes_list/quotes_list.container";
import { QuoteDetailsContainer } from "./modules/quote_details/quote_details.container";
import { FavoritesListContainer } from "./modules/favorites_list/favorites_list.container";


export default function SimpsonsRouters() {
    return(
        <BrowserRouter>
        <SideBar/>
        <Routes>
                <Route path="/" element={<QuotesContainer/>}/>
                <Route path="details/:id" element={<QuoteDetailsContainer/>}/>
                <Route path="favorites" element={<FavoritesListContainer/>} />
                <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    );  
}