import React, { useState, useEffect } from "react" ;
import './App.css';
import NavBar from "./components/NavBar.js";
import AptTable from "./components/AptTable.js";
// import History from "./History.js";
import AptCloud from './components/AptCloud.js';
import PersCard from './components/PersCard.js';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  //  Link
} from "react-router-dom";


function App() {

  // const [show, setShow] = useState(true);
  const [apartments, setapartments] = useState([]);

  const getApt = async () => {
    console.log("getting Apartments");
    try {
      const _apartments = await fetch("/calendar").then((res) => res.json());
      console.log("got posts", _apartments);
      setapartments(_apartments);
    } catch (err) {
      console.log("error ", err);
    }
  };

  useEffect(() => {
    getApt();
  }, [])  

  return (
    <div className="App" >
    <NavBar></NavBar>
    <Router>
        <Switch>
          <Route path="/perslist">
            <PersCard></PersCard>
          </Route>
          <Route path="/">
             <AptCloud apartments = {apartments}/> 
            <AptTable apartments = {apartments}/>
        
          </Route>
        </Switch>
    </Router>
    
    

    </div>
  );
}

export default App;

