import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MCCard from "./components/MCCard";
import UserForm from "./components/UserForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Map from "./views/Map";
import Dialogue from "./views/Dialogue";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/:id" element={<Dialogue />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
