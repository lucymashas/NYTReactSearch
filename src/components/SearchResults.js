import React from "react";

const SearchResults = props =>
  <div className="row" style={{ marginTop: 30 }}>
    <div className="col-sm-12">
        <div className="card">
            <div className="card-header">
              Top Articles
            </div>
            <div className="card-body">
          
            {props.results.map((result,index) =>
                    <div key={index}>
                      <h3>{result.headline.main}</h3>
                      <p>{result.pub_date}</p>
                      <p>{result.web_url}</p>
                    </div>
                 )}


            </div>
        </div>
    </div>
  </div>


export default SearchResults;