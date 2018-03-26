import React from "react";

const Results = props =>
  <div className="card">
      <div className="card-header">
        Top Articles
      </div>
      <div className="card-body">
        <p>
           Respond: {props.response}
        </p>

      </div>
  </div>


export default Results;