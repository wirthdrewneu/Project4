import React, { useEffect ,useState, Component } from "react";
import "../css/designs.css"
import ReactWordcloud from 'react-wordcloud';




function CardsList(props) {

 const [aptdata, setapt] = useState([]);
 const [refresher, setref] = useState([]);


  const test = props.apartments;
console.log("In here",test);


const fetchapt = async () => {  
    setapt(props.apartments)
    console.log("Got apt Data",aptdata);
  };
 

 useEffect(() =>{

fetchapt();
}, [refresher]
  )

const options = {
  rotations: 0,
  rotationAngles: [0, 0],
  padding : 0,
  fontWeight : "bold",
  fontSizes : [24,85],
  transitionDuration : 1000

};

var wordcloudobj = [{
 text: "Loading",
 value: 1
}];






const size = [1100, 300];


  return (
    
       <div className="container" id = "maincontent4"> 
        <div className="card-deck mb-3 text-center">
          <div className="card mb-6 shadow-sm">

</div>
</div>
</div>      

  );
}
/*AppCalendar.propTypes = {
  posts: AppCalendar.func.isRequired,
};*/

export default CardsList;

/* */
