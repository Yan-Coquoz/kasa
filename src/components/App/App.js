import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../Home";
import About from "../About";
import Error404 from "../Error404";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/error404" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
