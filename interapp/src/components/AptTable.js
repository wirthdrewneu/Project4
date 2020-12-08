import React, { useEffect ,useState, Component } from "react";
import "../css/designs.css"
import ReactWordcloud from 'react-wordcloud';



function AptTable(props) {

 const [aptdata, setapt] = useState([]);
  const [refresher, setref] = useState([]);
const [search, setsearch] = useState("");
  console.log("Get apartment props", props.apartments);
  const test = props.apartments;



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






for (var key of Object.keys(test)) {
  if (test[key].titletextonly){ 
  let words = test[key].titletextonly.split(" ");
  var i;

    for (i = 0; i < words.length; i++) {
    words[i]  = words[i].replace(/[^A-Za-z]+/g, '')
 if(words[i]){
console.log(wordcloudobj.find(texto => texto.text === words[i].toLowerCase()));

if(wordcloudobj.find(texto => texto.text === words[i].toLowerCase()) === undefined ){
console.log("in if", words[i].toLowerCase()); 
if  (words[i].length >2){
let texts = {
 text: words[i].toLowerCase(),
 value: 100
}

wordcloudobj.push(texts);
/*console.log(words[i].toLowerCase());*/ 
}
}

else{

   console.log("in else"); 
for (var j = 0; j < wordcloudobj.length; j++) {
   if(wordcloudobj[j].text === words[i]){
    wordcloudobj[j].value =  wordcloudobj[j].value +10;   

   console.log(wordcloudobj[j].text, wordcloudobj[j].value); 
}
  }
}
}
}


  }
  /*  console.log(key + " -> " + test[key].titletextonly)*/
}

 const [page, setpage] = useState(0);
 const in1 = page * 6 ;
 const in2 = (page * 6) + 6;
console.log( "ins ", in1, in2, page);

const test2 = props.apartments.filter(prices =>{
return (prices.price !== null && prices.price.replace(",","").includes(search)) || (prices.titletextonly!== null && prices.titletextonly.toLowerCase().includes(search.toLowerCase())) ||
(prices.housing !== null && prices.housing.toLowerCase().includes(search.toLowerCase())) || (prices.mapaddress !== null && prices.mapaddress.toLowerCase().includes(search.toLowerCase())) ;}
 )

const size = [900, 300];


  return (
    <main className="container-fluid full-height main-background">
       <div className="container" id = "maincontent"> 
        <div className="card-deck mb-3 text-center">
          <div className="card mb-6 shadow-sm">
      <ReactWordcloud 
      words={wordcloudobj} 
      size = {size}
      options = {options}
      />
</div>
</div>
</div>      
      <div className="container" id = "maincontent"> 
        <div className="card-deck mb-3 text-center">
          <div className="card mb-6 shadow-sm">
            <div className="card-header">
              <h2 className="my-0 font-weight-normal">Apartments</h2>
              </div>
 
 <table id="dataTable" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%" height = "400px">
  <thead>
    <tr>
      <th class="th-sm">Title

      </th>
      <th class="th-sm">Rooms

      </th>
      <th class="th-sm">Address

      </th>
      <th class="th-sm">
            Price
         

      </th>
    </tr>
  </thead>

  <tbody>
    { test2.slice(in1,in2).map (post => 
                    <tr>
                    <td>{post.titletextonly}</td>
                    <td>{post.housing}</td>
                    <td>{post.mapaddress}</td>
                    <td>{post.price}</td>
                    </tr>  
                )}
  
  </tbody>

</table>
<div>{search}<div style={{float: "left"}}>
<button onClick={() => setpage(page - 1 < 0 ? 0 : page - 1)}> Prev </button>
<button onClick={() => setpage(page + 1)}>Next</button>
</div>
<div style={{float: "right"}}>
<label>Search:</label> 
<input type="text" id="myInput" onChange= {s => setsearch(s.target.value)} placeholder="Search Here"/>
         </div> </div>
          </div>
     
      </div>
      </div>

    </main>
  );
}
/*AppCalendar.propTypes = {
  posts: AppCalendar.func.isRequired,
};*/

export default AptTable;

/* */
