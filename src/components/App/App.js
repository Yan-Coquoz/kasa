import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../Home";
import About from "../About";
import Location from "../Location";
import Error404 from "../Error404";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";

const App = () => {
    return (
        <div className="app">
            <div className="app__bloc">
                <Header />
                <div className="app__bloc-route">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        {/* Pas de / */}
                        <Route path="location">
                            {/* Route enfant */}
                            <Route path=":id" element={<Location />} />
                        </Route>
                        <Route path="/error404" element={<Error404 />} />
                        <Route path="*" element={<Navigate to="/error404" />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
