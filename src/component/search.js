import React from "react";
import { Link } from "react-router-dom";

function Search(){
    
        return(
            <div className="open-search">
            <Link to='/search' className="add-button">Add a book</Link>
            </div>
        );
}

export default Search;