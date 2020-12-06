import React, { useState } from "react";
import "../css/designs.css"


function AptTable(props) {
 const [aptdata, setapt] = useState([]);
  console.log("Get apartment props", props.apartments);
  const test = props.apartments;
  return (
    <main className="container-fluid full-height main-background">
      <div className="container" id = "maincontent"> 
        <div className="card-deck mb-3 text-center">
          <div className="card mb-6 shadow-sm">
            <div className="card-header">
              <h2 className="my-0 font-weight-normal">Apartments</h2>
              </div>

 <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
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
    { test.slice(0,3).map (post => 
                    <tr>
                    <td>{post.titletextonly}</td>
                    <td>{post.housing}</td>
                    <td>{post.mapaddress}</td>
                    <td>{post.price}</td>
                    </tr>  
                )}
  
  </tbody>
  
</table>

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
