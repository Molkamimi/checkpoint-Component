import React, {Component} from 'react';
import "./App.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";

function App() {
    return (
      <div className="App">
        <div className="mainProfile">
           
        <FullName/>
        </div>
        <Address />
     
    

 <ProfilPhoto />
</div>
        
    )
}


export default App


