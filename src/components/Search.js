import React, {Component} from "react";
import Form from "./Form";
import API from "../utils/API";
import Results from "./Results";


class Search extends React.Component{
    state = {
      searchTerms: "",
      number: 0,
      styr: "",
      endyr: "",
      result: []
    };

    searchArticles = query => (
      API.search(query)
        .then(res => this.setSate({result:res.data}))
        .catch(err => console.log(err))
    );
  

    handleInputChange = event => {
      const {name,value} = event.targer
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
      <Results
          response={this.state.result}
              />
      <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
      console.log({this.state.result})
      </div>
    );
  }

}

export default Search;