import React from 'react';
import QRCode from "react-qr-code";
function Subscription (){
    return (
        <div className="container mt-2">
            <h2>Scan the below QRCode </h2>
            <div className="d-flex justify-content-center align-items-center p-5">
                <QRCode size={100} value="https://quickmr-3199.web.app/qr/3199" />
            </div>
        </div>
    );
}
export default Subscription;