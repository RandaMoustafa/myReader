import React, {Component } from "react";
import Search from "../component/search";
import Shelf from "../component/shelf";
import * as BookAPI from '../BooksAPI';
 

class Home extends Component{
    state = {
        books : [],
    };
    componentDidMount(){
        BookAPI.getAll().then((books)=>{
            this.setState({books : books});
            console.log(books);
        })
    }
    updatedBook =(book , shelf)=>{
        BookAPI.update(book , shelf).then(res =>{
            book.shelf = shelf;
            this.setState(s => ({
                books : s.books.filter(b=> b.id !== book.id).concat([book])
            }));
        });
    }
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
            <div className="list-books-content">
                
                <Shelf updatedBook ={this.updatedBook} name="currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
                <Shelf updatedBook ={this.updatedBook} name="want To Read" books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
                <Shelf updatedBook ={this.updatedBook} name="Read" books={this.state.books.filter(b => b.shelf === "read")}/>             
            </div>
            <Search/>
            </div>
        );
    }
    
}


export default Home;