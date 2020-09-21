import React from 'react';
import {VegIcon, NonvegIcon } from "../Icons";

function MenuList ({ Menu, FullMenu }){
    let DisplyMenu={};
    if(Object.keys(Menu).length)
        DisplyMenu=Menu;
    else
        DisplyMenu=FullMenu;
    
    return (
        <>
            { Object.keys(DisplyMenu).map((key, index) => (
                                    <div className="w-100" key={index}>
                                        <div>
                                            <p className="text-secondary">{key}</p>
                                            <div>
                                                {
                                                    Object.keys(DisplyMenu[key]).map((itemKey,itemIndex)=> (
                                                        <div className="d-flex w-100 flex-row justify-content-between" key={itemIndex}>
                                                            <p  className="d-flex flex-row">{(DisplyMenu[key][itemKey]['category'] && DisplyMenu[key][itemKey]['category'] === 'nonveg')?<NonvegIcon />:<VegIcon />}{itemKey}</p>
                                                            <p><i className="fa">&#xf156;</i> {DisplyMenu[key][itemKey]['price']}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                )) }
        </>
    );
}
export default MenuList;