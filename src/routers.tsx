import React from "react";
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom";
import FruitDetails from './modules/fruit_details/fruit_details';
import ShoppingList from './modules/shopping_list/shopping_list';
import NotFound from './not_found';
import SideBar from './layout';
import { FruitsListContainer } from "./modules/fruits_list/fruits_list.container";


export default function TuttiFruttiRouters() {
    return(
        <BrowserRouter>
        <SideBar/>
        <Routes>
                <Route path="/" element={<FruitsListContainer/>} />
                <Route path="details/:id:" element={<FruitDetails/>} />
                <Route path="shoppingList" element={<ShoppingList/>} />
                <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    );  
}