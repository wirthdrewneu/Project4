
import "../css/form.css";
import React, { useEffect ,useState, Component } from "react";

function PersCard(){
const [apart, setapart] = useState([]);
console.log("What ahppend");
  const getApt2 = async () => {
    try {
      const _apartments = await fetch("/plist").then((res) => res.json());
      console.log("got posts 2", _apartments);
      setapart(_apartments);
    } catch (err) {
      console.log("error ", err);
    }}

  useEffect(() => {
    getApt2();
    }, [])  



    return(    
     <div className = "container">
     { apart.map (post =>         

          <div className="card mb-3 shadow-sm  mt-3">
            <div className="card-header">
              <h3 className="my-0 font-weight-normal">{apart.title}</h3>
            </div>
            <div className="card-body">
              <form action="/updateappevent" method="Post">
              <div className="form-group row">
                <label for="company1" className="col-3 control-label" style={{"textAlign": "left"}}>Company</label>
                <div className="col-9">
                  <input className="form-control" type="text"  id="company1" name="title"/>
                </div>
              </div>
              <div className="form-group row">
                <label for="appliedDate3" className="col-3 control-label" style={{"textAlign": "left"}}>Start Date</label>
                <div className="col-9">
                  <input className="form-control"  type="date"  id="appliedDate3" name="start" />
                </div>
              </div>
              <div className="form-group row">
                <label for="appliedDate4" className="col-3 control-label" style={{"textAlign": "left"}}>End Date</label>
                <div className="col-9">
                  <input className="form-control" type="date"  id="appliedDate4" name="end"  />
                </div>
              </div>
              <div class="padding-std">
                <button type="submit" className="btn btn-lg btn-block btn-outline-primary">Update</button>
              </div>
            </form>
        
            <form>
              <div class="padding-std">
                <button
                  type="submit"
                  onClick = {async (evt) => {
                        const response = await fetch("/delappevent", {
                                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        redirect: 'follow', // manual, *follow, error
                        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                        body: JSON.stringify({title : apart.title}) // body data type must match "Content-Type" header
                      });
                    }
                  }
                  className="btn btn-lg btn-block btn-outline-danger">
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>)}


        </div>

  );
}

export default PersCard;