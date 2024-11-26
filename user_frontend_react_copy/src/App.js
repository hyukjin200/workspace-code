import {Route, Routes, useNavigate } from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./css/styles.css";
import "./css/user.css";
import Header from "./layout/Header";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import { UserMainPage } from "./page/UserMainPage";

function App() {


  return (
    <>

      <Header/>

      <Navigation/>

      <div id="wrapper">
        <div id="content">
          <Routes>
            <Route path="/" exact element={<UserMainPage/>} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default App;
