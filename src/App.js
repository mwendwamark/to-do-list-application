import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Services from "./components/Services";
import About from "./components/About";
import "./components/App.css";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <BrowserRouter>
      {/* <div 
      style={{ backgroundColor: "var(--skyBlue)" }}
      > */}
        <Navbar />
        
        
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/form" element={<Form />} /> */}
            <Route exact path="/" element={<Home />} />
            <Route path="/your-todo-list" element={<Form />} />
            <Route path = "/services" element={<Services />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/contacts" element = {<Contacts />} />
          </Routes>
        
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;
