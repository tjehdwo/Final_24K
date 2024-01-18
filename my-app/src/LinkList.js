import React from "react";
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Reservation from "./Reservation";
import Payment from "./Payment";

export default function LinkList(){

    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Reservation />} />
                <Route path="/payment" element={<Payment/>} />
            </Routes>
        </Router>
    )
}