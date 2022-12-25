import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

// layouts

// views without layouts

import Landing from "./Views/Landing.js";
import Profile from "./Views/Profile.js";
import Index from "./Views/Index.js";
import Error404 from "./Views/Errors/Error404";


//const cors = require('cors')

//app.use(cors())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      
      {/* add routes without layouts */}
      <Route path="/landing" exact element={<Landing/>} />
      <Route path="/profile" exact element={<Profile/>} />
      <Route path="/" exact element={<Index/>} />
      <Route path="/404" exact element={<Error404/>} />

      {/* Page Not Found */}
      <Route path="*" element={<Navigate to="/404" />}/>
      
    </Routes>
  </BrowserRouter>
);
