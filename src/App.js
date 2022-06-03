import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from "./companents/home";
import Header from "./companents/header";
import Footer from "./companents/footer";
import ShopDetails from "./companents/shopDetails";
import Basket from "./companents/basket";


function App() {
    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path="/" element={< Home/>}/>
                <Route path="/shop-details/:id" element={< ShopDetails/>}/>
                <Route path="/shop-basket" element={< Basket/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
