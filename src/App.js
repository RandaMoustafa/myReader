import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Switch, Route } from 'react-router';
import Home from './views/home';
import SearchPage from './views/searchPage';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
 

  render() {
    return (
      <div className="app">
        {/* Make a Rout with React Router */}
        <Switch>
          <Route exact path='/' render={()=>(<Home/>)} />
          <Route path='/search' render={()=>(<SearchPage/>)}/>
          </Switch>
      </div>
    )
  }
}

export default BooksApp
