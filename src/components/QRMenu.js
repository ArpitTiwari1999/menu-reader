import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";

function QRMenu({ id, showQRMenu}) {
    const history = useHistory();
    useEffect(()=>{
        showQRMenu(id);
        history.push("/");
    });
  return (
    <>
    </>
  );
}

export default QRMenu;
