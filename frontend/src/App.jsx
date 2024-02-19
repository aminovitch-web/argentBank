import React from 'react';
import './App.scss';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'; 
import User from './pages/User/User';
import Error404 from './pages/Error404/Error404';
import AuthGuard from   './components/AuthGuard/AuthGuard';


function App() {
  const location = useLocation();
  const mainClass = location.pathname === '/signIn' || location.pathname === '/user' ? 'main bg-dark' : 'main';

  return (
    <>
      <Header />
      <main className={mainClass}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={
            <AuthGuard requireAuth={false}>
              <Login />
            </AuthGuard>
          } />
           <Route path="/user" element={
            <AuthGuard requireAuth={true}>
              <User />
            </AuthGuard>
          } />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
