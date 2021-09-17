import React from "react";
import Book from "./book";
import PropTypes from 'prop-types';

function Shelf ( props ){
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.books.map((books , key)=>
                        <Book updatedBook ={props.updatedBook} books={books} key={key}/>)
                    }
                </ol>
            </div>
            </div>
        )
    }
Shelf.propTypes = {
    updatedBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    name : PropTypes.string.isRequired
}
export default Shelf;