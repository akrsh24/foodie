import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import "./App.css";
import { LoaderUtil } from './util/loader/LoaderUtil';

function App() {
  return (
    <BrowserRouter>
      <LoaderUtil>
        <div className="app-container" >
          <Routes />
        </div>
      </LoaderUtil>
    </BrowserRouter>
  );
}

export default App;
