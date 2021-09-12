import React, { Component } from "react";
import PropTypes from 'prop-types';

class Book extends Component{
    render(){
        return(
            <div>
            <li>
    <div className="book">
    <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.books.imageLinks && this.props.books.imageLinks.thumbnail}")` }}></div>
        <div className="book-shelf-changer" >
        <select value={this.props.books.shelf} onChange={(e)=>{this.props.updatedBook(this.props.books , e.target.value)}}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
        </div>
    </div>
    <div className="book-title">{this.props.books.title}</div>
    <div className="book-authors">{this.props.books.authors && this.props.books.authors[0]}</div>
    </div>
</li>

</div>
        );
    }


}

Book.propTypes ={
    books : PropTypes.object.isRequired,
    updatedBook : PropTypes.func.isRequired,
    thumbnail: PropTypes.string,
    authors: PropTypes.array,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Book;