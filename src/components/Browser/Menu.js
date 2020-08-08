import React, { useEffect } from 'react';
import "./Menu.css";
import { FirebaseDatabaseNode } from "@react-firebase/database";

function Menu ({  menu, id, name, setMenu }){
    
    const string = a => {
        return JSON.stringify(a);
    }
    // const LoadMenu = (id,name,menu) =>{
    //     setMenu({"id":id,"name":name,"menu":menu})
    // }
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
            <h2>Kitchen Garden</h2>
            <p className="mb-0">
                ID : 3199
            </p>
            <div>
                <h3>Veg</h3>
                <div className="pl-1">
                    <p>Kadahi Paneer</p>
                    <p>400</p>
                </div>
            </div>
            {/* <div className="accordion" id="menu">
                <div className="card">
                    <div className="card-header" id="element1">
                        <button type="button" className="d-flex justify-content-between bd-highlight w-100 align-items-center" data-toggle="collapse" data-target="#itemList1" aria-expanded="true" aria-controls="itemList1">
                            <h4>Veg</h4><i className="fa fa-chevron-down"></i>
                        </button>
                    </div>
                    <div className="collapse show" id="itemList1" aria-labelledby="element1" data-parent="#menu">
                        <div className="container">
                            <div className=" d-flex justify-content-around flex-row">
                                <div className="pl-2">
                                    <p>Kadahi Paneer(Full)</p>
                                </div>
                                <div className="pr-2">Rs 400.0</div>
                            </div>
                            <div className=" d-flex justify-content-around flex-row">
                                <div className="pl-2">
                                    <p>Kadahi Paneer(Half)</p>
                                </div>
                                <div className="pr-2">Rs 400.0</div>
                            </div>
                            <div className=" d-flex justify-content-around flex-row">
                                <div className="pl-2">
                                    <p>Malai Kofta Dum Masala</p>
                                </div>
                                <div className="pr-2">Rs 250.0</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="element2">
                        <button type="button" className="d-flex justify-content-between bd-highlight w-100 align-items-center" data-toggle="collapse" data-target="#itemList2" aria-expanded="false" aria-controls="itemList2">
                            <h4>Non Veg</h4><i className="fa fa-chevron-down"></i>
                        </button>
                    </div>
                    <div className="collapse" id="itemList2" aria-labelledby="element2" data-parent="#menu">
                        <div className="container">
                            <div className=" d-flex justify-content-around flex-row">
                                <div className="pl-2">
                                    <p>Kadahi Paneer(Full)</p>
                                </div>
                                <div className="pr-2">Rs 400.0</div>
                            </div>
                            <div className=" d-flex justify-content-around flex-row">
                                <div className="pl-2">
                                    <p>Kadahi Paneer(Half)</p>
                                </div>
                                <div className="pr-2">Rs 400.0</div>
                            </div>
                            <div className=" d-flex justify-content-around flex-row">
                                <div className="pl-2">
                                    <p>Malai Kofta Dum Masala</p>
                                </div>
                                <div className="pr-2">Rs 250.0</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="element1">
                        <button type="button" className="d-flex justify-content-between bd-highlight w-100 align-items-center" data-toggle="collapse" data-target="#itemList3" aria-expanded="false" aria-controls="itemList3">
                            <h4>Accessories</h4><i className="fa fa-chevron-down"></i>
                        </button>
                    </div>
                    <div className="collapse" id="itemList3" aria-labelledby="element3" data-parent="#menu">
                        <div className="container">
                            <div className=" d-flex justify-content-around flex-row">
                                <div className="pl-2">
                                    <p>Kadahi Paneer(Full)</p>
                                </div>
                                <div className="pr-2">Rs 400.0</div>
                            </div>
                            <div className=" d-flex justify-content-around flex-row">
                                <div className="pl-2">
                                    <p>Kadahi Paneer(Half)</p>
                                </div>
                                <div className="pr-2">Rs 400.0</div>
                            </div>
                            <div className=" d-flex justify-content-around flex-row">
                                <div className="pl-2">
                                    <p>Malai Kofta Dum Masala</p>
                                </div>
                                <div className="pr-2">Rs 250.0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
export default Menu;