import React from 'react';
import Home from "../../container/Browser/Home";
import Menu from "../../container/Browser/Menu";
import Subscription from "./Subscription";

function Main ({nav}){
    if(nav === "Home")
        return <Home />
    else if(nav === "Menu")
        return <Menu />
    else if(nav === "Subscription")
        return <Subscription />
    else
        return <div>Invalid Selection of Header</div>
}
export default Main;