import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Error from './Error/Error.jsx';
import Home from './Home/Home.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Logements from './Logements/Logements.jsx';
import About from './About/About.jsx';
import Datagallery from '../data/logements.json'
import { useState } from 'react';

export default function App(){
    const [logement, setLogement]= useState(null)
    {setLogement(Datagallery)}
    return(
    <Router>

      <Header/>
      <Routes> 
      <Route path="/" element={< Home {...logement} />} />
      <Route path="/about" element={< About />} />
      <Route path="/logements/:id" element={< Logements />} />
      
      <Route path="*" element={< Error />} />
      </Routes>
      <Footer/>
    </Router>
    )
}
