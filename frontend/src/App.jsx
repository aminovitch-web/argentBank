import React from 'react';
import './App.scss';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'; 
import User from './pages/User/User';
import AuthGuard from './components/AuthGuard/AuthGuard'; 
import SignInGuard from './components/SignInGuard/SignInGuard'; 

function App() {
  const location = useLocation();
  const mainClass = location.pathname === '/signIn' || location.pathname === '/user' ? 'main bg-dark' : 'main';

  return (
    <>
      <Header />
      <main className={mainClass}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<SignInGuard />}> 
            <Route path="/signIn" element={<Login />} />
          </Route>
          <Route element={<AuthGuard />}>
            <Route path="/user" element={<User />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

