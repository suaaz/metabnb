import React from 'react'
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Place from './Place';
import Footer from './Footer';
import { Route ,Routes } from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
        < Navbar />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/place_to_stay' element={<Place />} />
        </Routes>
        < Footer />
      </div>
    </>

  );
}

export default App;
