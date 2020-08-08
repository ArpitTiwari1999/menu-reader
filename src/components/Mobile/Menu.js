import React, { useEffect } from 'react';
import { FirebaseDatabaseNode } from "@react-firebase/database";
import logo from '../../logo.png';
import {VegIcon, NonvegIcon } from "../Icons";
import AdSense from "react-adsense";

function Menu ({ id }){
    useEffect(()=>{
        document.title = "Menu";
    });
    const showMenu = (Menu) => {
        console.log(Menu);
        return(
                Object.keys(Menu).map((key, index) => (
                                    <div className="w-100" key={index}>
                                        <div>
                                            <p className="text-secondary">{key}</p>
                                            <div>
                                                {
                                                    Object.keys(Menu[key]).map((itemKey,itemIndex)=> (
                                                        <div className="d-flex w-100 flex-row justify-content-between" key={itemIndex}>
                                                            <p  className="d-flex flex-row">{(Menu[key][itemKey]['category'] && Menu[key][itemKey]['category'] === 'nonveg')?<NonvegIcon />:<VegIcon />}{itemKey}</p>
                                                            <p><i className="fa">&#xf156;</i> {Menu[key][itemKey]['price']}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
            ))
            );
    }
        return (
            <FirebaseDatabaseNode path={`/Shop/${id?id:'null'}`} orederByKey>
                {
                    d=>{
                        if(d.isLoading)
                        return (
                            <div>Loading...</div>
                        );
                        else if(!d.isLoading && d && d.value)
                        {
                            return (
                                <div className="container-fluid mt-2">
                                    <div className="d-flex flex-row align-items-center mb-5" style={{boxShadow:"0px 2px 0px grey"}}>
                                        <img src={logo} alt="Shop_Logo" width="70" height="70" />
                                        <div className="flex-coloumn">
                                            <h3 className="m-0" style={{fontWeight: "bold"}}>{(d.value && d.value.Name)?d.value.Name:"NA"}</h3>
                                            <p className="m-0">ID : {id}</p>
                                        </div>
                                    </div>
                                    <AdSense.Google client="ca-pub-7292810486004926" slot="7806394673" />
                                    {
                                        (d.value && d.value.Menu)?showMenu(d.value.Menu):<div>Error fetching Menu</div>
                                    }
                                </div>
                            );
                        }
                        else{
                            return(
                                <div>
                                    Invalid Shop Id !!! 
                                </div>
                            );
                        }
                    }
                }
            </FirebaseDatabaseNode>
        );
}
export default Menu;