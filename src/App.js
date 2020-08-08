import React from 'react';
import Browser from "./components/Browser";
import Mobile from "./components/Mobile";
import firebase from "firebase/app";
import firebaseConfig from "./config";
import "firebase/database";
import {FirebaseDatabaseProvider} from "@react-firebase/database";
import { MobileView, BrowserView } from "react-device-detect";
import { BrowserRouter as Router, Route} from "react-router-dom";
import QRMenu from "./container/QRMenu";

function App() {
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig} >
      <Router>
        <Route path="/" render={()=>{ return (
          <div>
            <BrowserView>
              <Browser />
            </BrowserView>
            <MobileView>
              <Mobile />
            </MobileView>
          </div>
          ) } } />
        <Route path="/qr/:id" component={QRMenu} />
      </Router>
    </FirebaseDatabaseProvider>
  );
}

export default App;
