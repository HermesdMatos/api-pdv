// App.js
import React, { useState } from 'react';
import './style/App.css';
import Login from './components/login';
import Register from './components/register';

function App() {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  function toggleLoginVisibility() {
    setLoginVisible(!isLoginVisible);
  }

  function toggleRegisterVisibility() {
    setRegisterVisible(!isRegisterVisible);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá, seja bem-vindo!</h1>
      </header>
      <main className='App-main'>
        <div
          id='Login-div'
          className='main-div'
          onMouseEnter={toggleLoginVisibility}
          onMouseLeave={toggleLoginVisibility}
        >
          <p>Fazer Login!</p>
          {isLoginVisible && <Login />}
        </div>
        <div
          id='SignUp-div'
          className='main-div'
          onMouseEnter={toggleRegisterVisibility}
          onMouseLeave={toggleRegisterVisibility}
        >
          <p>Registre-se!</p>
          {isRegisterVisible && <Register />}
        </div>
      </main>
    </div>
  );
}

export default App;
