import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" >
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
