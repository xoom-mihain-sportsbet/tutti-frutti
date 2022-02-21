import React from "react";
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";
import Favorites from './modules/favorites_list/favorites_list';
import QuoteDetails from "./modules/quote_details/quote_details";
import NotFound from './not_found';
import SideBar from './layout';
import { QuotesContainer } from "./modules/quotes_list/quotes_list.container";


export default function SimpsonsRouters() {
    return(
        <BrowserRouter>
        <SideBar/>
        <Routes>
                <Route path="/" element={<QuotesContainer/>} />
                <Route path="details/character:" element={<QuoteDetails/>}/>
                <Route path="favorites" element={<Favorites/>} />
                <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    );  
}