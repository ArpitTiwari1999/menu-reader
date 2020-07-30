import React from 'react';
import Home from "./Home";
import Menu from "./Menu";

function Main ({nav, onSubmit}){
    console.log(nav);
    
    if(nav === "Home")
        return <Home onSubmit={onSubmit} />
    else if(nav === "Menu")
        return <Menu />
    else
        return <div></div>
}
export default Main;