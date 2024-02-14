import React from 'react';
import './App.css';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'; 

function App() {
  const location = useLocation();
  const mainClass = location.pathname === '/signIn' ? 'main bg-dark' : 'main';

  return (
    <>
      <Header />
      <main className={mainClass}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
