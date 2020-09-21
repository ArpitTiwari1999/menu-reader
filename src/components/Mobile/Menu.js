import React, { useEffect } from 'react';
import { FirebaseDatabaseNode } from "@react-firebase/database";
import logo from '../../logo.png';
import MenuList from "../../container/Mobile/MenuList";

// import AdSense from "react-adsense"; updateMenu, Menu

function Menu ({ id, updateMenu }){

    let filter="";
    var NewMenu;
    var OriginalMenu;
    const showMenu = (ShopMenu) => {
        OriginalMenu = ShopMenu;
        NewMenu = ShopMenu;
        var TempNew={};
        const filterMenu = () => {
            if(filter && filter.value.trim() !== "" && NewMenu)
            {
                TempNew={};
                Object.keys(OriginalMenu).filter(
                    item =>{
                            var TempField={};
                            Object.keys(OriginalMenu[item]).filter(
                                name => {
                                    if((name.toLowerCase()).includes( filter.value.toLowerCase() ))
                                    {
                                        TempField[name]=OriginalMenu[item][name]
                                    }
                                    return "";
                                }
                            );
                            if(TempField)
                                TempNew[item]=TempField;
                            return "";
                        }
                );
                if(TempNew)
                    NewMenu=TempNew;
                updateMenu(NewMenu)
            }
            else
                updateMenu({})
        }
        return(
            <>
                <div>Search : <input type="text" placeholder="*Enter Item Name" onChange={filterMenu} ref={input=> (filter=input) } /></div>
                <br />
                <MenuList menu={NewMenu} />
            </>
        );
    }
    useEffect(()=>{
        document.title = "Menu";
    });
        return (
            <FirebaseDatabaseNode path={`/Shop/${id?id:'null'}`}>
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
                                    {/* <AdSense.Google client="ca-pub-7292810486004926" slot="7806394673" /> showMenu(d.value.Menu) */}
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