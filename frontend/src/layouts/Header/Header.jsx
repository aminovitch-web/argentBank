import React from 'react';
import './_Header.css';
import { NavLink } from 'react-router-dom';
import Logo from './argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/userSlice';
import { clearProfile } from '../../redux/reducers/userProfileSlice';

export default function Header() {
  const username = useSelector((state) => state.user.value.username); 
  const firstName = useSelector((state) => state.userProfile.userProfile.firstName); 
  const dispatch = useDispatch();

  const handleLogout = () => {
      dispatch(logout());
      dispatch(clearProfile());
      localStorage.removeItem("token"); 
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {username ? (
          <>
            <span className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </span>
            <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink className="main-nav-item" to="/signIn">
            <i className="fa fa-user-circle"></i> Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

