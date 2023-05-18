import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Services from "./Services";
import About from "./About";
import "./App.css";
import Contacts from "./Contacts";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "var(--skyBlue)" }}>
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "calc(100vh - 80px)",
            backgroundColor: "var(--blue)",
            padding: "20px",
          }}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/form" element={<Form />} /> */}
            <Route exact path="/" element={<Home />} />
            <Route path="/your-todo-list" element={<Form />} />
            <Route path = "/services" element={<Services />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/contacts" element = {<Contacts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
