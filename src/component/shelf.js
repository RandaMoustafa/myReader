import React, { Component } from "react";
import Book from "./book";
import PropTypes from 'prop-types';

class Shelf extends Component{
    render(){
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.books.map((books , key)=>
                        <Book updatedBook ={this.props.updatedBook} books={books} key={key}/>)
                    }
                </ol>
            </div>
            </div>
        )
    }

}
Shelf.propTypes = {
    updatedBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    name : PropTypes.string.isRequired
}
export default Shelf;