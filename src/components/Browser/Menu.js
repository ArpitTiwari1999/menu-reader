import React, { useEffect } from 'react';
import "./Menu.css";
import logo from '../../logo.png';
import { FirebaseDatabaseNode } from "@react-firebase/database";

function Menu ({  menu, id, name, setMenu }){
    
    const string = a => {
        return JSON.stringify(a);
    }
    useEffect(()=>{
        document.title = "Menu";
    });
    if(false)
        return (
            <FirebaseDatabaseNode path={`/Shop/${id?id:'null'}`} orederByKey>
                {
                    d=>{
                        if(d.isLoading)
                        return (
                            <div>Loading...</div>
                        );
                        else
                        {
                            return (
                                <div>
                                    <p>Name : {(d.value && d.value.Name)?string(d.value.Name):"NA"}</p>
                                    <p>ID : {id}</p>
                                    <p>Menu : {(d.value && d.value.Menu)?string(d.value.Menu):"NA"}</p>
                                </div>
                            );
                        }
                    }
                }
            </FirebaseDatabaseNode>
        );
    return (
        <div className="container-fluid mt-2 bg-secondary">
            <div className="container">
            <img src={logo} alt="Shop_Logo" width="70" height="70" />
                <h2>Kitchen Garden</h2>
                <p className="mb-0">
                    ID : 3199
                </p>
            </div>
            <div>
                <h3>Veg</h3>
                <div className="pl-1">
                    <p>Kadahi Paneer</p>
                    <p>400</p>
                </div>
            </div>
        </div>
    );
}
export default Menu;