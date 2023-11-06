import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import MovieList from './components/movie-list';
import Navbar from './components/NavBar/Navbar.js';   // Import the Navbar component
import Footer from './components/Footer/Footer.js';    // Import the Footer component
import './App.css';


export default class App extends React.Component {
render() {
  return (
    <div className="App">
      <Navbar />           {/* Render the Navbar component */}
      <br />
      <header className="App-header">
        <h2 className="App-title">Movie Reviews</h2>
      </header>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <MovieList />
          </div>
        </div>
      </div>
      <Footer />           {/* Render the Footer component */}
    </div>
    );
  }
}