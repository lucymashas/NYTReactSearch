import React from "react";

const Results = props =>
  <div className="card">
      <div className="card-header">
        Top Articles
      </div>
      <div className="card-body">
        <p>
           Headline: {props.result}
        </p>

      </div>
  </div>


export default Results;