import React from 'react';
import QrReader from "react-qr-scanner";

const hadleScan = (data) => {
    if(data)
    {
        shopId.value=data;
        console.log(data);
        document.getElementById('MainForm').submit();
    }
}

const handleError =(err) =>{
    console.error(err);
}

let shopId;
function Home ({ onSubmit }){
    return (
        <div className="container mt-2">
            <h2>Enter the Shop Code</h2>
            <div className="d-flex justify-content-center align-items-center p-5">
                <form id="MainForm" onSubmit={e=>{
                    let id= shopId.value;
                    e.preventDefault();
                    if(!id.trim())
                        return
                    onSubmit(id);
                    shopId.value='';
                }}>
                    <input type="text" placeholder="*Shop code " ref={input => (shopId=input)}/> -OR- Scan QRCode here
                    <input type="submit" value="Submit" />
                </form>
            </div>
                    <QrReader style={{display:'flex',width:320,height:240}} delay={1000} onError={handleError} onScan={hadleScan}/>
        </div>
    );
}
export default Home;