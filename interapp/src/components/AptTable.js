import React, { useEffect ,useState, Component } from "react";
import "../css/designs.css"



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

 const [page, setpage] = useState(0);
 const in1 = page * 10 ;
 const in2 = (page * 10) + 10;
console.log( "ins ", in1, in2, page);
const test2 = props.apartments.filter(prices =>{
return (prices.price !== null && prices.price.replace(",","").includes(search)) || (prices.titletextonly!== null && prices.titletextonly.toLowerCase().includes(search.toLowerCase())) ||
(prices.housing !== null && prices.housing.toLowerCase().includes(search.toLowerCase())) || (prices.mapaddress !== null && prices.mapaddress.toLowerCase().includes(search.toLowerCase())) ;}
 )
  return (
    <main className="container-fluid full-height main-background">
      <div className="container" id = "maincontent"> 
        <div className="card-deck mb-3 text-center">
          <div className="card mb-6 shadow-sm">
            <div className="card-header">
              <h2 className="my-0 font-weight-normal">Apartments</h2>
              </div>
 
 <table id="dataTable" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%" height = "800px">
  <thead>
    <tr>
      <th class="th-sm">Title

      </th>
      <th class="th-sm">Rooms

      </th>
      <th class="th-sm">Address

      </th>
      <th class="th-sm">Price

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
