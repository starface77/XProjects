import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from "./Navigation/Navigation";
import About from "./Home/About"
import Explore from './Explore/Explore';

function MainJSX() {
    return (
        <Routes>
            <Route element={<Navigation />}>
                <Route path='/' element={<About />} />
                <Route path='/about' element={<Explore />} />
            </Route>
        </Routes>
    );
}

export default MainJSX;
