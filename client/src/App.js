import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Books from "./components/books.jsx";     // components are capital
import Add from "./components/add.jsx";
import Update from "./components/update.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Books/>}/>
          <Route path="/add" element = {<Add/>}/>
          <Route path="/update" element = {<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
