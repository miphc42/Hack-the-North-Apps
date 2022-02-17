import "./App.css";
import React from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/events/:id" element={<Page key={Date.now()} />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
