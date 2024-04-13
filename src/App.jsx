// import { useEffect, useState } from "react";
import {Header} from "./components/Header";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";

const AppLayout = () =>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )

}
export default AppLayout;
