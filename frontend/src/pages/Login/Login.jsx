import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/userSlice';
import apiService from '../../services/apiService';
import './_Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [inputUsername, setInputUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 

    try {
      const response = await apiService.login({ email: inputUsername, password });
      dispatch(login({ username: inputUsername, body: response.body }));
      navigate('/user');
    } catch (error) {
      setErrorMessage('Combinaison email / mot de passe incorrectes'); 
    }
  };

  return (
    <>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Affichage conditionnel du message d'erreur */}
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </>
  );
}
