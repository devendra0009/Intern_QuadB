import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Desc from './components/Desc';
import { useState } from 'react';
function App() {
  const [link,setLink]=useState('');
  link&&localStorage.setItem('showLink',link)
  // console.log(link);
  return (
    <>
     <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home setLink={setLink} />} />
          <Route exact path="/desc" element={<Desc link={link} />} />
        </Routes>
      </Router>
        <Footer />
    </>
  );
}

export default App;
