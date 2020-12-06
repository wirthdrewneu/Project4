import React, { useState, Component } from "react";
import "../css/designs.css"
/*import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; */
import BootstrapTable from 'react-bootstrap-table-next';


function AptTable(props) {
 const [aptdata, setapt] = useState([]);
  console.log("Get apartment props", props.apartments);
  const test = props.apartments;
 const [page, setpage] = useState(0);
 const in1 = page * 10 ;
 const in2 = (page * 10) + 10;
console.log( "ins ", in1, in2, page);

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
      <th class="th-sm">Name

      </th>
      <th class="th-sm">Position

      </th>
      <th class="th-sm">Start date

      </th>
      <th class="th-sm">Price

      </th>
    </tr>
  </thead>
  <tbody>
    { test.slice(in1,in2).map (post => 
                    <tr>
                    <td>{post.titletextonly}</td>
                    <td>{post.housing}</td>
                    <td>{post.mapaddress}</td>
                    <td>{post.price}</td>
                    </tr>  
                )}
  
  </tbody>

</table>
<div>
<button onClick={() => setpage(page - 1)}> Prev </button>
<button onClick={() => setpage(page + 1)}>Next</button>
         </div>
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
