import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component{
    render(){
        return(
            <div className="open-search">
            <Link to='/search' className="add-button">Add a book</Link>
          </div>
        );
    }
}

export default Search;