import React from "react";
import { BrowserRouter as Router, Route, BrowserRouter, Routes, useParams } from "react-router-dom";
import Favorites from './modules/favorites_list/favorites_list';
import NotFound from './not_found';
import SideBar from './layout';
import { QuotesContainer } from "./modules/quotes_list/quotes_list.container";
import { QuoteDetailsContainer, QuoteDetailsProps } from "./modules/quote_details/quote_details.container";
import { Omit } from "react-redux";


export default function SimpsonsRouters() {
    return(
        <BrowserRouter>
        <SideBar/>
        <Routes>
                <Route path="/" element={<QuotesContainer/>}/>
                <Route path="details/:id" element={<QuoteDetailsContainer/>}/>
                <Route path="favorites" element={<Favorites/>} />
                <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    );  
}