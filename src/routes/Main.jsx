import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "../pages/Home";
import { Create } from "../pages/Create";
import { Search } from "../pages/Search";
import { Project } from "../pages/Project";

export const Main = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/search" element={<Search />} />
                <Route path="/projects/:id" element={<Project />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


