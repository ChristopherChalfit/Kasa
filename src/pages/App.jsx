import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Error from './Error/Error.jsx';
import Home from './Home/Home.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Logements from './Logements/Logements.jsx';
import About from './About/About.jsx';
import Datagallery from '../data/logements.json'
import { useState, useEffect } from 'react';

function App(){
    const [logement, setLogement]= useState()
    useEffect(() => {
      setLogement(Datagallery)
    }, []);
    return(
    <Router>
      <Header/>
      <Routes> 
      <Route path="/Kasa/" element={< Home logements={logement} />} />
      <Route path="/Kasa/about" element={< About />} />
      <Route path="/Kasa/logements/:id" element={< Logements logement= {logement}/>} />
      
      <Route path="/Kasa/*" element={< Error />} />
      </Routes>
      <Footer/>
    </Router>
    )
}
export default App
