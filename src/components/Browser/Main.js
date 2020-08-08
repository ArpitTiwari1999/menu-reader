import React from 'react';
import Home from "../../container/Browser/Home";
import Menu from "../../container/Browser/Menu";

function Main ({nav, onSubmit}){
    if(nav === "Home")
        return <Home />
    else if(nav === "Menu")
        return <Menu />
    else
        return <div></div>
}
export default Main;