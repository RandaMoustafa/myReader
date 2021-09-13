## MyReads Project

## Table of content
 * [Installation](#installation)
 * [WhatIsRunning](#WhatIsRunning)
 * [Backend_Server](#BackendServer)
 * [CreateReactApp](#CreateReactApp)
## Installation
Use the package manager npm or yarn to install MyReads.

* install all project dependencies with `npm install`
* start the development server with `npm start`

## WhatIsRunning
* The Home Page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:
* Currently Reading
* Want To Read
* Read

* Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.
* currentl Read
* Want To Read
* Read
* None

* The main page also has a + icon to /search, a search page that allows you to find books to add to your library.

* The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

* The search page also has a ⬅ icon to / (the root URL), which leads back to the home page.
## BackendServer

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## CreateReactApp

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


