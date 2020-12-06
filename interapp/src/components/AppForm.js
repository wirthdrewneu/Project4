import React, { useState, useEffect } from "react";
import "../css/form.css";

function AppForm ({edit, itemDetails}) {
  const [url, setUrl] = useState("/appform");
  const [fields, setFields] = useState({});

  useEffect(() => {
    if (edit) {
      setFields(itemDetails);
      setUrl("/updateApplication");
    }
  }, [url, fields, edit, itemDetails]);
 
  return( <main>   
    <div className={(edit) ? "container-fluid" : "container-fluid full-height"}>
      <div className="container bg-white shadow no-padding" id="maincontent">
        {(edit) ? '' : <h2 className="h4 mb-4 header-std padding-std center-text">Add Application</h2>}
        <form action={url} method="POST" className="padding-std">
          <div className="form-group row">
            <label for="company" className="col-2 col-form-label" >Company</label>
            <div className="col-10">
              <input className="form-control" type="text" id="company" name="Company" defaultValue={(!fields) ? '' : fields.Company}/>
            </div>
          </div>
          <div className="form-group row">
            <label for="role" className="col-2 col-form-label">Role</label>
            <div className="col-10">
              <input className="form-control" type="text" id="role" name="Role" defaultValue={(!fields) ? '' : fields.Role}/>
            </div>
          </div>
          <div className="form-group row">
            <label for="type" className="col-2 col-form-label">Type</label>
            <div className="col-10">
              <input className="form-control" type="text" id="type" name="Type" defaultValue={(!fields) ? '' : fields.Type}/>
            </div>
          </div>
          <div className="form-group row">
            <label for="recruiter" className="col-2 col-form-label">Recruiter Info</label>
            <div className="col-10">
              <input className="form-control" type="text" id="recruiter" name="RecruiterInfo" defaultValue={(!fields) ? '' : fields.RecruiterInfo} />
            </div>
          </div>
          <div className="form-group row">
            <label for="appliedDate" className="col-2 col-form-label">Date Applied</label>
            <div className="col-10">
              <input className="form-control" type="date" id="appliedDate" name="DateApplied" defaultValue={(!fields) ? '' : fields.DateApplied}/>
            </div>
          </div>
          <div className="form-group row">
            <label for="stage" className="col-2 col-form-label">Stage</label>
            <div className="col-10">
              <select className="form-control" id="stage" name="Stage" defaultValue={(!fields) ? '' : fields.Stage}>
                <option>Applied</option>
                <option>Online Assessment</option>
                <option>Interview</option>
                <option>Follow Up</option>
                <option>Offer</option>
                <option>Reject</option>
                <option>Accepted</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label for="stageDate" className="col-2 col-form-label">Next Due Date</label>
            <div className="col-10">
              <input className="form-control" type="date" id="stageDate" name="StageDate" defaultValue={(!fields) ? '' : fields.StageDate}/>
            </div>
          </div>
          <div className="form-group row">
            <label for="jobDesc" className="col-2 col-form-label">Job Description</label>
            <div className="col-10">
              <textarea className="form-control" id="jobDesc" rows="3" name="JobDescription" defaultValue={(!fields) ? '' : fields.JobDescription}></textarea>
            </div>
          </div>
          {(edit) ? <input hidden className="form-control" type="text" id="_id" name="_id" defaultValue={(!fields) ? '' : fields._id}/> : '' }
          <div className="center">
            <button type="submit" className="btn btn-primary">{(edit) ? 'Save Changes' : 'Submit'}</button>
          </div>
        </form>
      </div>
    </div> </main>
  );
}
export default AppForm;