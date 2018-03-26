import React from "react";

const Form = props =>
    <div className="card">
      <div className="card-header">
        Search Parameters
      </div>

      <div className="card-body">
        
      <form>
        <div className="form-group">
          <label>Search Term</label>
          <input
            type="text"
            className="form-control"
            name="searchTerms"
            value={props.searchTerms}
            onChange={props.handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Number of Records to Retrieve</label>
          <input
            type="text"
            className="form-control"
            name="number"
            value={props.number}
            onChange={props.handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Start Year (Optional)</label>
          <input
            type="text"
            className="form-control"
            name="styr"
            value={props.styear}
            onChange={props.handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>End Year (Optional)</label>
          <input
            type="text"
            className="form-control"
            name="endyr"
            value={props.endyr}
            onChange={props.handleInputChange}
          />
        </div>
       
        <button type ="submit" className="btn btn-secondary" onClick={props.handleFormSubmit}>Search</button>
        {/* <button type ="submit" className="btn btn-secondary" onClick={props.clear}>Clear Results</button> */}

      </form>
      </div>
    </div>


export default Form;