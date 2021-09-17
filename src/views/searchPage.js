import React, {Component } from "react";
import { Link } from "react-router-dom";
import * as BookAPI from '../BooksAPI';
import Book from "../component/book";
import PropTypes from 'prop-types';


//   function SearchPage(updatedBook,updateQuery){
//     const [books,results,setApi] = useState();
//     const [query] = useState("");
    
    

//     useEffect(()=>{BookAPI.getAll().then((books)=>{setApi(books);})},[]);

//             updateQuery = (query)=>{
//                 setApi({
//                     query : query
//                 } ,
//                     searchHandler);
//             }
//             function searchHandler(){
//                 if(query === '' || query === undefined){
//                     return setApi({results: []});
//                 }
//                 BookAPI.search(query.trim())
//                 .then(res=> {
//                     if(res.error){
//                         return setApi({results: []})
//                     }else{
//                         res.forEach(b=>{
//                             let f = books.filter(book=> book.id === b.id);
//                             if(f[0]){
//                                 b.shelf = f.shelf;
//                             }
//                             return setApi({results: res});
//                         });
//                     }


//                 }
                
//                 )
//             }

//     updatedBook =(book , shelf)=>{
//         BookAPI.update(book , shelf).then(res =>{
//             book.shelf = shelf;
//             setApi(s => ({
//                 books : s.books.filter(b=> b.id !== book.id).concat([book])
//             }));
//         });
//     }




//         return(
//             <div className="search-books">
//             <div className="search-books-bar">
//                 <Link to='/' className="close-search" >Close</Link>
//                 <div className="search-books-input-wrapper">
//                 <input type="text" placeholder="Search by title or author" value={query}
//                 onChange={(e)=> {updateQuery(e.target.value)}}/>

//                 </div>
//             </div>
//             <div className="search-books-results">
//                 <ol className="books-grid">
//                     {results.map((books , key) => <Book updatedBook ={updatedBook} books={books} key={key} />)}
//                 </ol>
//             </div>
//             </div>
//         );

// }
// SearchPage.proptypes ={
//     updatedBook: PropTypes.func.isRequired
// }








class SearchPage extends Component{
    state = {
        books: [],
        query : "",
        results : []
    }
    componentDidMount(){
        BookAPI.getAll().then((books)=>{
            this.setState({books : books});
        })
            }

            updateQuery = (query)=>{
                this.setState({
                    query : query
                } ,
                    this.searchHandler);
            }
            searchHandler(){
                if(this.state.query === '' || this.state.query === undefined){
                    return this.setState({results: []});
                }
                BookAPI.search(this.state.query.trim())
                .then(res=> {
                    if(res.error){
                        return this.setState({results: []})
                    }else{
                        res.forEach(b=>{
                            let f = this.state.books.filter(book=> book.id === b.id);
                            if(f[0]){
                                b.shelf = f.shelf;
                            }
                            return this.setState({results: res});
                        });
                    }


                }
                
                )
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
            <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search" >Close</Link>
                <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.query}
                onChange={(e)=> {this.updateQuery(e.target.value)}}/>

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.results.map((books , key) => <Book updatedBook ={this.updatedBook} books={books} key={key} />)}
                </ol>
            </div>
            </div>
        );
    }

}

SearchPage.proptypes ={
    updatedBook: PropTypes.func.isRequired
}
export default SearchPage;

