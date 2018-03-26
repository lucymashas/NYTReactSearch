import React, { Component } from "react";
import Form from "./Form";
import API from "../utils/API";
import Results from "./Results";


class Search extends Component{
    state = {
      search: "",
      result: []
    };

    searchArticles = query => (
      API.search(query)
        .then(res => {
          console.log(res);
          this.setState({result: res.data});
        }).catch(err => console.log(err))
    );
  

    handleInputChange = event => {
      const {name,value} = event.target;
      this.setState({
        [name]:value
    })
  }

    handleFormSubmit = event => {
      event.preventDefault();
      this.searchArticles(this.state.search);
    };

  render () {
    return (
      <div>
     
      <Form
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />

      </div>
    );
  }

}

export default Search;